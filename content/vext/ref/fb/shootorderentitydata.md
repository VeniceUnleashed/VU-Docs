---
title: ShootOrderEntityData
---

Inherits from 
[BFOrderEntityData](/vext/ref/fb/bforderentitydata)

## Summary
### Constructors
| |
| ----------- |
| **[ShootOrderEntityData](#constructor-0)**() |
| **[ShootOrderEntityData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[ShootOrderEntityData](#constructor-2)**(other: [BFOrderEntityData](/vext/ref/fb/bforderentitydata)) |
| **[ShootOrderEntityData](#constructor-3)**(other: [OrderEntityData](/vext/ref/fb/orderentitydata)) |
| **[ShootOrderEntityData](#constructor-4)**(other: [EntityData](/vext/ref/fb/entitydata)) |
| **[ShootOrderEntityData](#constructor-5)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[ShootOrderEntityData](#constructor-6)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[ShootOrderEntityData](#constructor-7)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "strengthType" >}} | [StrengthType](/vext/ref/fb/strengthtype) |
| {{< prop "pose" >}} | [PoseType](/vext/ref/fb/posetype) |
| {{< prop "shootType" >}} | [ShootType](/vext/ref/fb/shoottype) |
| {{< prop "preferAlternativeWeapon" >}} | bool |
| {{< prop "completeWhenHumanIsSensed" >}} | bool |
| {{< prop "cycleTargets" >}} | bool |
| {{< prop "randomTargetOrder" >}} | bool |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "ShootOrderEntityData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### ShootOrderEntityData {#constructor-0}
> **ShootOrderEntityData**()

Creates a new [ShootOrderEntityData](/vext/ref/fb/shootorderentitydata) frostbite instance.

### ShootOrderEntityData {#constructor-1}
> **ShootOrderEntityData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [ShootOrderEntityData](/vext/ref/fb/shootorderentitydata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### ShootOrderEntityData {#constructor-2}
> **ShootOrderEntityData**(other: [BFOrderEntityData](/vext/ref/fb/bforderentitydata))

Casts an instance of type [BFOrderEntityData](/vext/ref/fb/bforderentitydata) to [ShootOrderEntityData](/vext/ref/fb/shootorderentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [BFOrderEntityData](/vext/ref/fb/bforderentitydata) | The instance to cast to [ShootOrderEntityData](/vext/ref/fb/shootorderentitydata). |

### ShootOrderEntityData {#constructor-3}
> **ShootOrderEntityData**(other: [OrderEntityData](/vext/ref/fb/orderentitydata))

Casts an instance of type [OrderEntityData](/vext/ref/fb/orderentitydata) to [ShootOrderEntityData](/vext/ref/fb/shootorderentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [OrderEntityData](/vext/ref/fb/orderentitydata) | The instance to cast to [ShootOrderEntityData](/vext/ref/fb/shootorderentitydata). |

### ShootOrderEntityData {#constructor-4}
> **ShootOrderEntityData**(other: [EntityData](/vext/ref/fb/entitydata))

Casts an instance of type [EntityData](/vext/ref/fb/entitydata) to [ShootOrderEntityData](/vext/ref/fb/shootorderentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [EntityData](/vext/ref/fb/entitydata) | The instance to cast to [ShootOrderEntityData](/vext/ref/fb/shootorderentitydata). |

### ShootOrderEntityData {#constructor-5}
> **ShootOrderEntityData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [ShootOrderEntityData](/vext/ref/fb/shootorderentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [ShootOrderEntityData](/vext/ref/fb/shootorderentitydata). |

### ShootOrderEntityData {#constructor-6}
> **ShootOrderEntityData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [ShootOrderEntityData](/vext/ref/fb/shootorderentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [ShootOrderEntityData](/vext/ref/fb/shootorderentitydata). |

### ShootOrderEntityData {#constructor-7}
> **ShootOrderEntityData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [ShootOrderEntityData](/vext/ref/fb/shootorderentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [ShootOrderEntityData](/vext/ref/fb/shootorderentitydata). |

## Properties
### {{% prop-heading "strengthType" %}}
> **[StrengthType](/vext/ref/fb/strengthtype)**

### {{% prop-heading "pose" %}}
> **[PoseType](/vext/ref/fb/posetype)**

### {{% prop-heading "shootType" %}}
> **[ShootType](/vext/ref/fb/shoottype)**

### {{% prop-heading "preferAlternativeWeapon" %}}
> **bool**

### {{% prop-heading "completeWhenHumanIsSensed" %}}
> **bool**

### {{% prop-heading "cycleTargets" %}}
> **bool**

### {{% prop-heading "randomTargetOrder" %}}
> **bool**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [ShootOrderEntityData](/vext/ref/fb/shootorderentitydata) type.

