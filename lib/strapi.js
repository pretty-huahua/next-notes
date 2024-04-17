export async function getAllNotes() {
    const response = await fetch(`http://127.0.0.1:1337/api/notes`)
    const data = await response.json();
  
    const res = {};
  
    data.data.forEach(({id, attributes: {title, content, slug, updatedAt}}) => {
      res[slug] = JSON.stringify({
        title,
        content,
        updateTime: updatedAt
      })
    })
  
    return res
  }
  
  export async function addNote(data) {
    const response = await fetch(`http://127.0.0.1:1337/api/notes`, {
      method: 'POST',
      headers: {
        Authorization: 'bearer 4c611daec60fcfbfbb4309f192f059deb1559753f29a50b997ba813c40f843d6605bda50bde8ccf48e4615ec1446742e8ba97d2119b675a27436bd31e045c2af888c2cca6c79a692d3fb5e39f1e1aca3c7a95a7dce4b82e0e3c60f651e3ec7b44e4fb719086eab9bda5e5f2610e97d47c71a09288d3b993a52cc3f9021c765bc',
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        data: JSON.parse(data)
      })
    })
    const res = await response.json();
    return res.data.attributes.slug
  }
  
  export async function updateNote(uuid, data) {
    const {id} = await getNote(uuid);
    const response = await fetch(`http://127.0.0.1:1337/api/notes/${id}`, {
      method: 'PUT',
      headers: {
        Authorization: 'bearer 4c611daec60fcfbfbb4309f192f059deb1559753f29a50b997ba813c40f843d6605bda50bde8ccf48e4615ec1446742e8ba97d2119b675a27436bd31e045c2af888c2cca6c79a692d3fb5e39f1e1aca3c7a95a7dce4b82e0e3c60f651e3ec7b44e4fb719086eab9bda5e5f2610e97d47c71a09288d3b993a52cc3f9021c765bc',
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        data: JSON.parse(data)
      })
    })
    const res = await response.json()
  }
  
  export async function getNote(uuid) {
    const response = await fetch(`http://127.0.0.1:1337/api/notes?filters[slug][$eq]=${uuid}`)
    const data = await response.json();
    return {
      title: data.data[0].attributes.title,
      content: data.data[0].attributes.content,
      updateTime: data.data[0].attributes.updatedAt,
      id: data.data[0].id
    }
  }
  
  export async function delNote(uuid) {
    const {id} = await getNote(uuid);
    const response = await fetch(`http://127.0.0.1:1337/api/notes/${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: 'bearer 4c611daec60fcfbfbb4309f192f059deb1559753f29a50b997ba813c40f843d6605bda50bde8ccf48e4615ec1446742e8ba97d2119b675a27436bd31e045c2af888c2cca6c79a692d3fb5e39f1e1aca3c7a95a7dce4b82e0e3c60f651e3ec7b44e4fb719086eab9bda5e5f2610e97d47c71a09288d3b993a52cc3f9021c765bc',
        "Content-Type": "application/json"
      }
    })
    const res = await response.json()
  }
  
  