import React from 'react'

const Typography = () => {
  return (

    //! Fragment
    // <></>
    // <React.Fragment></React.Fragment>
    // ikisi arasındaki fark, boş olana key yazamıyorsun, dolu olana key yazabiliyorsun. ama kullanım açısından ikisi de aynı, DOM'u yormayan bir fragment olmuş oluyor
    //!
    //* Anthony hocanın notu
    // Fragment
    // <>
    // <React.Fragment key=""> key proeprtysi kullanmamız lazım ama doma da yük bindirmek istemiyorsak Fragment componentini kullnabaliriz. 
    //*

    <div>
      <h3 className="text-2xl ">Typography</h3>
      <p className="text-sm">Typography</p>
      <p className="text-lg">Typography</p>
      <p className="text-xl">Typography</p>
      <p className="text-3xl">Typography</p>
      <p className="text-4xl">Typography</p>
      <p className="text-6xl">Typography</p>
      <p className="text-[75px]">Typography</p>
      <p className="text-[10rem]">Typography</p>
      <article>
        <p className="line-clamp-3 hover:line-clamp-none">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit facilis similique, esse voluptatibus doloremque, asperiores quod minus quae sunt nesciunt corrupti aut nisi, explicabo sequi delectus vero commodi repudiandae fuga provident. Modi adipisci consequatur dolorum repellat impedit neque commodi voluptatum ullam cum, quam fugiat nesciunt ex sapiente quae mollitia sit eveniet perspiciatis nemo maiores, quaerat exercitationem? Est architecto incidunt tempora totam dignissimos iusto autem quod unde. Voluptatum nihil veniam recusandae iure veritatis aliquam sunt ducimus. Eligendi, quis voluptatum alias dignissimos officia voluptatem, nesciunt nulla reprehenderit dolore unde adipisci perspiciatis dolor. Voluptatibus eligendi beatae aut praesentium perspiciatis in, obcaecati iusto quos voluptatum eos sit vero doloremque officiis aliquid debitis blanditiis nemo voluptate odit quae sint nobis natus iste ipsam! Voluptate, tempore dignissimos recusandae vero illum vel laudantium minus hic sequi, nisi quaerat suscipit accusamus, itaque sapiente. Illum maxime non voluptate dolor corporis. Unde in molestiae minus atque delectus non reprehenderit harum?</p>
      </article>

      <p className="text-center">Typography</p>
      <p className="underline">Typography</p>
      <p className="line-through">Typography</p>
      <p className="text-red-300">Typography</p>
      <p className="text-green-500">Typography</p>
      <p className="text-6xl text-[rgb(154,200,205)]">Typography</p>
      <p className="text-6xl text-[rgb(154,200,5)]">Typography</p>
      <p className="text-6xl text-[#1E0A32]">Typography</p>
      <p className="bg-[#b5a5c5] text-white">Typography</p>
      
      <br /><br /><br /><br /><br /><br />
    </div>

    
  )
}

export default Typography