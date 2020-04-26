---
title: FollowWaypointsEntityData
---

Inherits from 
[EntityData](/vext/ref/fb/entitydata)

## Summary
### Constructors
| |
| ----------- |
| **[FollowWaypointsEntityData](#constructor-0)**() |
| **[FollowWaypointsEntityData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[FollowWaypointsEntityData](#constructor-2)**(other: [EntityData](/vext/ref/fb/entitydata)) |
| **[FollowWaypointsEntityData](#constructor-3)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[FollowWaypointsEntityData](#constructor-4)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[FollowWaypointsEntityData](#constructor-5)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "typeOfRoute" >}} | [RouteType](/vext/ref/fb/routetype) |
| {{< prop "usePathFinding" >}} | bool |
| {{< prop "startAtGeometricallyClosestWaypoint" >}} | bool |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "FollowWaypointsEntityData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### FollowWaypointsEntityData {#constructor-0}
> **FollowWaypointsEntityData**()

Creates a new [FollowWaypointsEntityData](/vext/ref/fb/followwaypointsentitydata) frostbite instance.

### FollowWaypointsEntityData {#constructor-1}
> **FollowWaypointsEntityData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [FollowWaypointsEntityData](/vext/ref/fb/followwaypointsentitydata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### FollowWaypointsEntityData {#constructor-2}
> **FollowWaypointsEntityData**(other: [EntityData](/vext/ref/fb/entitydata))

Casts an instance of type [EntityData](/vext/ref/fb/entitydata) to [FollowWaypointsEntityData](/vext/ref/fb/followwaypointsentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [EntityData](/vext/ref/fb/entitydata) | The instance to cast to [FollowWaypointsEntityData](/vext/ref/fb/followwaypointsentitydata). |

### FollowWaypointsEntityData {#constructor-3}
> **FollowWaypointsEntityData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [FollowWaypointsEntityData](/vext/ref/fb/followwaypointsentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [FollowWaypointsEntityData](/vext/ref/fb/followwaypointsentitydata). |

### FollowWaypointsEntityData {#constructor-4}
> **FollowWaypointsEntityData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [FollowWaypointsEntityData](/vext/ref/fb/followwaypointsentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [FollowWaypointsEntityData](/vext/ref/fb/followwaypointsentitydata). |

### FollowWaypointsEntityData {#constructor-5}
> **FollowWaypointsEntityData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [FollowWaypointsEntityData](/vext/ref/fb/followwaypointsentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [FollowWaypointsEntityData](/vext/ref/fb/followwaypointsentitydata). |

## Properties
### {{% prop-heading "typeOfRoute" %}}
> **[RouteType](/vext/ref/fb/routetype)**

### {{% prop-heading "usePathFinding" %}}
> **bool**

### {{% prop-heading "startAtGeometricallyClosestWaypoint" %}}
> **bool**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [FollowWaypointsEntityData](/vext/ref/fb/followwaypointsentitydata) type.

