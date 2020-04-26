---
title: PatrolOrderEntityData
---

Inherits from 
[BFOrderEntityData](/vext/ref/fb/bforderentitydata)

## Summary
### Constructors
| |
| ----------- |
| **[PatrolOrderEntityData](#constructor-0)**() |
| **[PatrolOrderEntityData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[PatrolOrderEntityData](#constructor-2)**(other: [BFOrderEntityData](/vext/ref/fb/bforderentitydata)) |
| **[PatrolOrderEntityData](#constructor-3)**(other: [OrderEntityData](/vext/ref/fb/orderentitydata)) |
| **[PatrolOrderEntityData](#constructor-4)**(other: [EntityData](/vext/ref/fb/entitydata)) |
| **[PatrolOrderEntityData](#constructor-5)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[PatrolOrderEntityData](#constructor-6)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[PatrolOrderEntityData](#constructor-7)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "typeOfRoute" >}} | [RouteType](/vext/ref/fb/routetype) |
| {{< prop "combatMode" >}} | [CombatPatrolMode](/vext/ref/fb/combatpatrolmode) |
| {{< prop "startingWaypoint" >}} | [WaypointData](/vext/ref/fb/waypointdata) \| nil |
| {{< prop "startAtGeometricallyClosestWaypoint" >}} | bool |
| {{< prop "usePathFinding" >}} | bool |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "PatrolOrderEntityData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### PatrolOrderEntityData {#constructor-0}
> **PatrolOrderEntityData**()

Creates a new [PatrolOrderEntityData](/vext/ref/fb/patrolorderentitydata) frostbite instance.

### PatrolOrderEntityData {#constructor-1}
> **PatrolOrderEntityData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [PatrolOrderEntityData](/vext/ref/fb/patrolorderentitydata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### PatrolOrderEntityData {#constructor-2}
> **PatrolOrderEntityData**(other: [BFOrderEntityData](/vext/ref/fb/bforderentitydata))

Casts an instance of type [BFOrderEntityData](/vext/ref/fb/bforderentitydata) to [PatrolOrderEntityData](/vext/ref/fb/patrolorderentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [BFOrderEntityData](/vext/ref/fb/bforderentitydata) | The instance to cast to [PatrolOrderEntityData](/vext/ref/fb/patrolorderentitydata). |

### PatrolOrderEntityData {#constructor-3}
> **PatrolOrderEntityData**(other: [OrderEntityData](/vext/ref/fb/orderentitydata))

Casts an instance of type [OrderEntityData](/vext/ref/fb/orderentitydata) to [PatrolOrderEntityData](/vext/ref/fb/patrolorderentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [OrderEntityData](/vext/ref/fb/orderentitydata) | The instance to cast to [PatrolOrderEntityData](/vext/ref/fb/patrolorderentitydata). |

### PatrolOrderEntityData {#constructor-4}
> **PatrolOrderEntityData**(other: [EntityData](/vext/ref/fb/entitydata))

Casts an instance of type [EntityData](/vext/ref/fb/entitydata) to [PatrolOrderEntityData](/vext/ref/fb/patrolorderentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [EntityData](/vext/ref/fb/entitydata) | The instance to cast to [PatrolOrderEntityData](/vext/ref/fb/patrolorderentitydata). |

### PatrolOrderEntityData {#constructor-5}
> **PatrolOrderEntityData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [PatrolOrderEntityData](/vext/ref/fb/patrolorderentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [PatrolOrderEntityData](/vext/ref/fb/patrolorderentitydata). |

### PatrolOrderEntityData {#constructor-6}
> **PatrolOrderEntityData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [PatrolOrderEntityData](/vext/ref/fb/patrolorderentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [PatrolOrderEntityData](/vext/ref/fb/patrolorderentitydata). |

### PatrolOrderEntityData {#constructor-7}
> **PatrolOrderEntityData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [PatrolOrderEntityData](/vext/ref/fb/patrolorderentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [PatrolOrderEntityData](/vext/ref/fb/patrolorderentitydata). |

## Properties
### {{% prop-heading "typeOfRoute" %}}
> **[RouteType](/vext/ref/fb/routetype)**

### {{% prop-heading "combatMode" %}}
> **[CombatPatrolMode](/vext/ref/fb/combatpatrolmode)**

### {{% prop-heading "startingWaypoint" %}}
> **[WaypointData](/vext/ref/fb/waypointdata)** | **nil**

### {{% prop-heading "startAtGeometricallyClosestWaypoint" %}}
> **bool**

### {{% prop-heading "usePathFinding" %}}
> **bool**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [PatrolOrderEntityData](/vext/ref/fb/patrolorderentitydata) type.

