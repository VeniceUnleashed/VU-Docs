---
title: SaveEntityData
---

Inherits from 
[EntityData](/vext/ref/fb/entitydata)

## Summary
### Constructors
| |
| ----------- |
| **[SaveEntityData](#constructor-0)**() |
| **[SaveEntityData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[SaveEntityData](#constructor-2)**(other: [EntityData](/vext/ref/fb/entitydata)) |
| **[SaveEntityData](#constructor-3)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[SaveEntityData](#constructor-4)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[SaveEntityData](#constructor-5)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "saveScreenTexture" >}} | [TextureAsset](/vext/ref/fb/textureasset) \| nil |
| {{< prop "levelName" >}} | string |
| {{< prop "saveFileName" >}} | string |
| {{< prop "saveNameSID" >}} | string |
| {{< prop "checkForHumanPlayer" >}} | bool |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "SaveEntityData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### SaveEntityData {#constructor-0}
> **SaveEntityData**()

Creates a new [SaveEntityData](/vext/ref/fb/saveentitydata) frostbite instance.

### SaveEntityData {#constructor-1}
> **SaveEntityData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [SaveEntityData](/vext/ref/fb/saveentitydata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### SaveEntityData {#constructor-2}
> **SaveEntityData**(other: [EntityData](/vext/ref/fb/entitydata))

Casts an instance of type [EntityData](/vext/ref/fb/entitydata) to [SaveEntityData](/vext/ref/fb/saveentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [EntityData](/vext/ref/fb/entitydata) | The instance to cast to [SaveEntityData](/vext/ref/fb/saveentitydata). |

### SaveEntityData {#constructor-3}
> **SaveEntityData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [SaveEntityData](/vext/ref/fb/saveentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [SaveEntityData](/vext/ref/fb/saveentitydata). |

### SaveEntityData {#constructor-4}
> **SaveEntityData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [SaveEntityData](/vext/ref/fb/saveentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [SaveEntityData](/vext/ref/fb/saveentitydata). |

### SaveEntityData {#constructor-5}
> **SaveEntityData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SaveEntityData](/vext/ref/fb/saveentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [SaveEntityData](/vext/ref/fb/saveentitydata). |

## Properties
### {{% prop-heading "saveScreenTexture" %}}
> **[TextureAsset](/vext/ref/fb/textureasset)** | **nil**

### {{% prop-heading "levelName" %}}
> **string**

### {{% prop-heading "saveFileName" %}}
> **string**

### {{% prop-heading "saveNameSID" %}}
> **string**

### {{% prop-heading "checkForHumanPlayer" %}}
> **bool**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [SaveEntityData](/vext/ref/fb/saveentitydata) type.

