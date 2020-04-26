---
title: ChunkStreamerEntityData
---

Inherits from 
[EntityData](/vext/ref/fb/entitydata)

## Summary
### Constructors
| |
| ----------- |
| **[ChunkStreamerEntityData](#constructor-0)**() |
| **[ChunkStreamerEntityData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[ChunkStreamerEntityData](#constructor-2)**(other: [EntityData](/vext/ref/fb/entitydata)) |
| **[ChunkStreamerEntityData](#constructor-3)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[ChunkStreamerEntityData](#constructor-4)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[ChunkStreamerEntityData](#constructor-5)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "cells" >}} | [ChunkStreamerCell](/vext/ref/fb/chunkstreamercell)[] |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "ChunkStreamerEntityData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### ChunkStreamerEntityData {#constructor-0}
> **ChunkStreamerEntityData**()

Creates a new [ChunkStreamerEntityData](/vext/ref/fb/chunkstreamerentitydata) frostbite instance.

### ChunkStreamerEntityData {#constructor-1}
> **ChunkStreamerEntityData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [ChunkStreamerEntityData](/vext/ref/fb/chunkstreamerentitydata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### ChunkStreamerEntityData {#constructor-2}
> **ChunkStreamerEntityData**(other: [EntityData](/vext/ref/fb/entitydata))

Casts an instance of type [EntityData](/vext/ref/fb/entitydata) to [ChunkStreamerEntityData](/vext/ref/fb/chunkstreamerentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [EntityData](/vext/ref/fb/entitydata) | The instance to cast to [ChunkStreamerEntityData](/vext/ref/fb/chunkstreamerentitydata). |

### ChunkStreamerEntityData {#constructor-3}
> **ChunkStreamerEntityData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [ChunkStreamerEntityData](/vext/ref/fb/chunkstreamerentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [ChunkStreamerEntityData](/vext/ref/fb/chunkstreamerentitydata). |

### ChunkStreamerEntityData {#constructor-4}
> **ChunkStreamerEntityData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [ChunkStreamerEntityData](/vext/ref/fb/chunkstreamerentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [ChunkStreamerEntityData](/vext/ref/fb/chunkstreamerentitydata). |

### ChunkStreamerEntityData {#constructor-5}
> **ChunkStreamerEntityData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [ChunkStreamerEntityData](/vext/ref/fb/chunkstreamerentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [ChunkStreamerEntityData](/vext/ref/fb/chunkstreamerentitydata). |

## Properties
### {{% prop-heading "cells" %}}
> **[ChunkStreamerCell](/vext/ref/fb/chunkstreamercell)**[]

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [ChunkStreamerEntityData](/vext/ref/fb/chunkstreamerentitydata) type.

