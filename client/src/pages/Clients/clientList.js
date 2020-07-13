const clientList = [
  {
    cedula: '26496096',
    nombre: 'Raúl',
    apellido: 'Chirinos',
    direccion: 'P Sherman, Calle Wannaby 42. Sidney',
    telefono: '04126670532'
  },
  {
    cedula: '1965340',
    nombre: 'Rosa',
    apellido: 'Durán',
    direccion: 'Houston TX, 1340',
    telefono: '02692484318'
  },
  {
    cedula: '26885430',
    nombre: 'Victor',
    apellido: 'Naranjo',
    direccion: 'CABA Belgrano, P45007',
    telefono: '0412-xxxxxxx'
  }
];

export function addClient(newClientObject) {
  clientList.push(newClientObject);
}

export default clientList;
