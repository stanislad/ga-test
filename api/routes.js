const Router = require('@koa/router');
const router = new Router();

const lrProperty = require('./models/lrProperty.js');

router
.param('lrPropertyId', async (id, ctx, next) =>
{
	await fetch_from_db({id: id}, ctx, next);
})
.param('outcode', async (outcode, ctx, next) =>
{
	await fetch_from_db({outcode: outcode}, ctx, next);
})
.param('postcode', async (postcode, ctx, next) =>
{
	let split = postcode.split(' ');
	if(split.length > 1)
	{
		let outcode = split[0];
		let incode = split[1];
		await fetch_from_db({incode: incode, outcode: outcode}, ctx, next);
	}
})
.param('street', async (street, ctx, next) =>
{
	await fetch_from_db({street: street}, ctx, next);
})
.get('/', async (ctx, next) =>
{
	return ctx.body = "I'm alive!";
})
.get('/lrProperty/outcode/:outcode', async (ctx, next) =>
{
	return ctx.body = {success: true, lrProperty: ctx.lrProperty.toJSON()};
})
.get('/lrProperty/postcode/:postcode', async (ctx, next) =>
{
	return ctx.body = {success: true, lrProperty: ctx.lrProperty.toJSON()};
})
.get('/lrProperty/id/:lrPropertyId', async (ctx, next) =>
{
	return ctx.body = {success: true, lrProperty: ctx.lrProperty.toJSON()};
})
.get('/lrProperty/street/:street', async (ctx, next) =>
{
	return ctx.body = {success: true, lrProperty: ctx.lrProperty.toJSON()};
});


module.exports = (app) =>
{
	app
	.use(router.routes())
	.use(router.allowedMethods());
};

async function fetch_from_db(data, ctx, next) {

	ctx.lrProperty = await new lrProperty(data).fetch({
		withRelated: ['lrTransactions'],
		require: false
	});

	if (!ctx.lrProperty) {
		ctx.status = 404;
		return ctx.body = {error: true, msg: "LRProperty not found"};
	}

	return next();
}