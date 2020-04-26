---
title: PlayVideoEntityData
---

Inherits from 
[EntityData](/vext/ref/fb/entitydata)

## Summary
### Constructors
| |
| ----------- |
| **[PlayVideoEntityData](#constructor-0)**() |
| **[PlayVideoEntityData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[PlayVideoEntityData](#constructor-2)**(other: [EntityData](/vext/ref/fb/entitydata)) |
| **[PlayVideoEntityData](#constructor-3)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[PlayVideoEntityData](#constructor-4)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[PlayVideoEntityData](#constructor-5)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "movie" >}} | [MovieTextureAsset](/vext/ref/fb/movietextureasset) \| nil |
| {{< prop "keepBlackScreen" >}} | bool |
| {{< prop "allowSkip" >}} | bool |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "PlayVideoEntityData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### PlayVideoEntityData {#constructor-0}
> **PlayVideoEntityData**()

Creates a new [PlayVideoEntityData](/vext/ref/fb/playvideoentitydata) frostbite instance.

### PlayVideoEntityData {#constructor-1}
> **PlayVideoEntityData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [PlayVideoEntityData](/vext/ref/fb/playvideoentitydata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### PlayVideoEntityData {#constructor-2}
> **PlayVideoEntityData**(other: [EntityData](/vext/ref/fb/entitydata))

Casts an instance of type [EntityData](/vext/ref/fb/entitydata) to [PlayVideoEntityData](/vext/ref/fb/playvideoentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [EntityData](/vext/ref/fb/entitydata) | The instance to cast to [PlayVideoEntityData](/vext/ref/fb/playvideoentitydata). |

### PlayVideoEntityData {#constructor-3}
> **PlayVideoEntityData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [PlayVideoEntityData](/vext/ref/fb/playvideoentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [PlayVideoEntityData](/vext/ref/fb/playvideoentitydata). |

### PlayVideoEntityData {#constructor-4}
> **PlayVideoEntityData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [PlayVideoEntityData](/vext/ref/fb/playvideoentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [PlayVideoEntityData](/vext/ref/fb/playvideoentitydata). |

### PlayVideoEntityData {#constructor-5}
> **PlayVideoEntityData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [PlayVideoEntityData](/vext/ref/fb/playvideoentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [PlayVideoEntityData](/vext/ref/fb/playvideoentitydata). |

## Properties
### {{% prop-heading "movie" %}}
> **[MovieTextureAsset](/vext/ref/fb/movietextureasset)** | **nil**

### {{% prop-heading "keepBlackScreen" %}}
> **bool**

### {{% prop-heading "allowSkip" %}}
> **bool**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [PlayVideoEntityData](/vext/ref/fb/playvideoentitydata) type.

