import { Link } from 'react-router-dom'

const StringRendaring = () => {
  const title ="Catherine"
  const Year ="2028"

  return (
  <>
   <div>
    
    <h2 className='bg-pink-500' p-10 h-10  w-5 mx-15>THE LIFE STORY OF JESUS CHRIST</h2>
    <p>Jesus Christ is the Son of God and the Saviour of the world according to Christian belief. His life is one of the most important stories in the Bible. Jesus was born in Bethlehem, a small town in Judea, more than two thousand years ago. His mother was Mary, and His earthly guardian was Joseph. Before Jesus was born, the angel Gabriel appeared to Mary and told her that she would give birth to a son by the power of the Holy Spirit. The angel told her to name the child Jesus because He would save His people from their sins. Mary accepted God's plan with faith and obedience. At that time, the Roman emperor Caesar Augustus ordered a census, so Joseph travelled from Nazareth to Bethlehem with Mary. While they were in Bethlehem, the time came for Mary to give birth. Jesus was born and laid in a manger because there was no room for them in the inn. On the night of His birth, an angel appeared to shepherds who were watching their flocks in the fields and announced the good news of Jesus' birth. A multitude of heavenly angels praised God, saying, "Glory to God in the highest." The shepherds went to Bethlehem and found Mary, Joseph, and the baby Jesus. Later, wise men from the East followed a star and came to worship Jesus. They offered Him gifts of gold, frankincense, and myrrh. When King Herod heard about the birth of the child who was called the King of the Jews, he became afraid and planned to kill Him. However, an angel warned Joseph in a dream to take Mary and Jesus to Egypt. Joseph obeyed, and the family remained there until it was safe to return. After Herod's death, Joseph brought his family back and settled in Nazareth. Jesus grew up in Nazareth and became strong and wise. When Jesus was twelve years old, He travelled with His parents to Jerusalem for the Passover festival. On their journey home, Mary and Joseph discovered that Jesus was missing. They returned to Jerusalem and searched for Him for three days. Finally, they found Him in the temple, sitting among the teachers, listening to them and asking questions. Everyone who heard Him was amazed at His understanding and answers. Jesus returned to Nazareth with His parents and was obedient to them. As He grew, He increased in wisdom, stature, and favour with God and people. The Bible teaches that Jesus lived a sinless life and perfectly obeyed His heavenly Father. His birth brought hope to the world, and Christians celebrate His birth at Christmas. His early life prepared the way for the great mission He would fulfil in the years to come.

    </p>
    <Link to={"/"}  className='bg-amber-500 w-16  h-10 rounded-1xl'>Back</Link>
   </div>
    </>
  )
}

export default StringRendaring
