import React from "react"

const AddBook = () => {
  return (
    <div className="p-5 mt-5">
      <form className="container p-5 bg-dark text-white justify-content-center">
        <legend className="text-center">ADD NEW BOOK HERE</legend>
        <div className="mb-3">
          <label htmlFor="name" className="form-label" />
          <select id="class" className="form-select">
            <option defaultValue="Class">CLASS</option>
            <option value="PreNursery">Pre-Nursery</option>
            <option value="Nursery1">Nursery 1</option>
            <option value="Nursery2">Nursery 2</option>
            <option value="Grade1">Grade 1</option>
            <option value="Grade2">Grade 2</option>
            <option value="Grade3">Grade 3</option>
            <option value="Grade4">Grade 4</option>
            <option value="Grade5">Grade 5</option>
            <option value="Grade6">Grade 6</option>
            <option value="JSS1">JSS 1 </option>
            <option value="JSS2">JSS 2</option>
            <option value="JSS3">JSS 3</option>
            <option value="SSS">Senior Secondary</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="Name" className="form-label" />

          <input
            type="text"
            className="form-control"
            id="Name"
            aria-describedby="Name"
            placeholder="Book Name Here"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="Publisher" className="form-label" />

          <input
            type="text"
            className="form-control"
            id="Publisher"
            aria-describedby="Publisher"
            placeholder="Publisher Name Here"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="Price" className="form-label" />

          <input
            type="number"
            className="form-control"
            id="Price"
            aria-describedby="Price"
            placeholder="Price Here"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  )
}

export default AddBook
