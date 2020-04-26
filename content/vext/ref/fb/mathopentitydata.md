---
title: MathOpEntityData
---

Inherits from 
[EntityData](/vext/ref/fb/entitydata)

## Summary
### Constructors
| |
| ----------- |
| **[MathOpEntityData](#constructor-0)**() |
| **[MathOpEntityData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[MathOpEntityData](#constructor-2)**(other: [EntityData](/vext/ref/fb/entitydata)) |
| **[MathOpEntityData](#constructor-3)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[MathOpEntityData](#constructor-4)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[MathOpEntityData](#constructor-5)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "realm" >}} | [Realm](/vext/ref/fb/realm) |
| {{< prop "operators" >}} | [MathOp](/vext/ref/fb/mathop)[] |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "MathOpEntityData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### MathOpEntityData {#constructor-0}
> **MathOpEntityData**()

Creates a new [MathOpEntityData](/vext/ref/fb/mathopentitydata) frostbite instance.

### MathOpEntityData {#constructor-1}
> **MathOpEntityData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [MathOpEntityData](/vext/ref/fb/mathopentitydata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### MathOpEntityData {#constructor-2}
> **MathOpEntityData**(other: [EntityData](/vext/ref/fb/entitydata))

Casts an instance of type [EntityData](/vext/ref/fb/entitydata) to [MathOpEntityData](/vext/ref/fb/mathopentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [EntityData](/vext/ref/fb/entitydata) | The instance to cast to [MathOpEntityData](/vext/ref/fb/mathopentitydata). |

### MathOpEntityData {#constructor-3}
> **MathOpEntityData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [MathOpEntityData](/vext/ref/fb/mathopentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [MathOpEntityData](/vext/ref/fb/mathopentitydata). |

### MathOpEntityData {#constructor-4}
> **MathOpEntityData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [MathOpEntityData](/vext/ref/fb/mathopentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [MathOpEntityData](/vext/ref/fb/mathopentitydata). |

### MathOpEntityData {#constructor-5}
> **MathOpEntityData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [MathOpEntityData](/vext/ref/fb/mathopentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [MathOpEntityData](/vext/ref/fb/mathopentitydata). |

## Properties
### {{% prop-heading "realm" %}}
> **[Realm](/vext/ref/fb/realm)**

### {{% prop-heading "operators" %}}
> **[MathOp](/vext/ref/fb/mathop)**[]

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [MathOpEntityData](/vext/ref/fb/mathopentitydata) type.

