import React from 'react'

const HoverandFocus = () => {
  return (
    <div>
        <button className="w-40 bg-slate-400 p-4 m-4 text-slate-50 hover:bg-red-200 hover:shadow-lg hover:rounded-xl hover:text-slate-700">
            Save
        </button>
        <input type="text" placeholder="Focus" className="border border-gray-400 rounded-lg p-4 w-20 focus:outline-red-600 focus:w-96"/>
        <br />
        <input type="email" placeholder="Focus" className="border border-gray-400 rounded-lg p-4 w-20 focus:outline-red-600 focus:w-96 peer"/>
        <p className="text-red-600 invisible peer-invalid:visible">Invalid</p>

        {/* peer input ve altına yazılacak şeyleri seçmek için bir nevi seçici olmuş oluyor(modifier deniyor) */}
    </div>
  )
}

export default HoverandFocus