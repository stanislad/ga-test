import React, {useState, useEffect} from 'react';
import SearchBar from "./components/SearchBar";
import DisplayProperty from "./components/DisplayProperty";
import Tab from "./components/Tab";

function App()
{
  const [propertyData, setPropertyData] = useState(null);
  const [term, setTerm] = useState('');
  const [search, setSearch] = useState(null);
  const [activeTab, setActiveTab] = useState(1);

  //dictionary representing  {api url : tab text, ...}
  const tab_config = {
    'id': 'ID',
    'outcode': 'Outcode (only)',
    'postcode' : 'Postcode',
    'street' : 'Street Name'
  };

  useEffect(() =>
  {
    async function fetchData()
    {
      if(!search) return

      //all letter capitalised and trimmed from both sides
      const resp = await fetch("/lrProperty/"+ Object.keys(tab_config)[activeTab] + "/" + search.toUpperCase().trim());
      const json = await resp.json();

      if(json.success)
        setPropertyData(json.lrProperty)
      else if(json.error){
        setPropertyData(null);
      }
    }

    fetchData();
  }, [search]);

  //empty fields on tab change
  useEffect(() =>
  {
    setSearch(null);
    setPropertyData(null);
    setTerm('');
  }, [activeTab]);


  return (
    <div className="App">
      <div className='ui container'>
        <Tab activeTab={activeTab} setActiveTab={setActiveTab} tab_text={Object.values(tab_config)}/>
        <SearchBar onTermSubmit={setSearch} term={term} setTerm={setTerm}/>
        <DisplayProperty propertyData={propertyData}/>
      </div>
    </div>
  );
}

export default App;
