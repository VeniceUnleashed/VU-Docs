---
title: ScriptEntityData
---

Inherits from 
[EntityData](/vext/ref/fb/entitydata)

## Summary
### Constructors
| |
| ----------- |
| **[ScriptEntityData](#constructor-0)**() |
| **[ScriptEntityData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[ScriptEntityData](#constructor-2)**(other: [EntityData](/vext/ref/fb/entitydata)) |
| **[ScriptEntityData](#constructor-3)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[ScriptEntityData](#constructor-4)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[ScriptEntityData](#constructor-5)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "code" >}} | string |
| {{< prop "realm" >}} | [Realm](/vext/ref/fb/realm) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "ScriptEntityData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### ScriptEntityData {#constructor-0}
> **ScriptEntityData**()

Creates a new [ScriptEntityData](/vext/ref/fb/scriptentitydata) frostbite instance.

### ScriptEntityData {#constructor-1}
> **ScriptEntityData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [ScriptEntityData](/vext/ref/fb/scriptentitydata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### ScriptEntityData {#constructor-2}
> **ScriptEntityData**(other: [EntityData](/vext/ref/fb/entitydata))

Casts an instance of type [EntityData](/vext/ref/fb/entitydata) to [ScriptEntityData](/vext/ref/fb/scriptentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [EntityData](/vext/ref/fb/entitydata) | The instance to cast to [ScriptEntityData](/vext/ref/fb/scriptentitydata). |

### ScriptEntityData {#constructor-3}
> **ScriptEntityData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [ScriptEntityData](/vext/ref/fb/scriptentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [ScriptEntityData](/vext/ref/fb/scriptentitydata). |

### ScriptEntityData {#constructor-4}
> **ScriptEntityData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [ScriptEntityData](/vext/ref/fb/scriptentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [ScriptEntityData](/vext/ref/fb/scriptentitydata). |

### ScriptEntityData {#constructor-5}
> **ScriptEntityData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [ScriptEntityData](/vext/ref/fb/scriptentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [ScriptEntityData](/vext/ref/fb/scriptentitydata). |

## Properties
### {{% prop-heading "code" %}}
> **string**

### {{% prop-heading "realm" %}}
> **[Realm](/vext/ref/fb/realm)**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [ScriptEntityData](/vext/ref/fb/scriptentitydata) type.

