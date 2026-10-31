const Student =({data1,data2,data3})=>{

    return(
<>
<div>
<h2>{data1.Name}</h2>
<p>{data1.Age}</p>
<p>{data1.Course}</p>
<br /><br />

<h2>{data2.Name}</h2>
<p>{data2.Age}</p>
<p>{data2.Course}</p>
<br /><br />

<h2>{data3.Name}</h2>
<p>{data3.Age}</p>
<p>{data3.Course}</p>
</div>



</>

    )

}
export default Student