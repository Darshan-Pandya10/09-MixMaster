import { Form , useNavigation } from "react-router-dom"
function SearchBox({searchTerm}) {
    const navigation = useNavigation();
    const isSubmitting = navigation.state === 'submitting';
  return (
   <Form className="w-fit m-2  border-2 border-solid border-slate-300">
    <input 
    type='search' 
    name="search" 
    className="px-2 py-1 w-[65vw] sm:w-[20rem] outline-none"
    defaultValue={searchTerm}
    />
    <button 
    type="submit" 
    className="px-4 py-1 bg-green-500 hover:bg-green-400 font-medium  text-base tracking-wider"
    disabled={isSubmitting}
    >
    {isSubmitting ? 'Searching' : 'Search'}
    </button>
   </Form>
  )
}

export default SearchBox
