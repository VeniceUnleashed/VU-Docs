---
title: AutoTeamEntityData
---

Inherits from 
[GameEntityData](/vext/ref/fb/gameentitydata)

## Summary
### Constructors
| |
| ----------- |
| **[AutoTeamEntityData](#constructor-0)**() |
| **[AutoTeamEntityData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[AutoTeamEntityData](#constructor-2)**(other: [GameEntityData](/vext/ref/fb/gameentitydata)) |
| **[AutoTeamEntityData](#constructor-3)**(other: [SpatialEntityData](/vext/ref/fb/spatialentitydata)) |
| **[AutoTeamEntityData](#constructor-4)**(other: [EntityData](/vext/ref/fb/entitydata)) |
| **[AutoTeamEntityData](#constructor-5)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[AutoTeamEntityData](#constructor-6)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[AutoTeamEntityData](#constructor-7)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "teamDifferenceToAutoBalance" >}} | int |
| {{< prop "teamAssignMode" >}} | [TeamAssignMode](/vext/ref/fb/teamassignmode) |
| {{< prop "playerCountNeededToAutoBalance" >}} | int |
| {{< prop "forceIntoSquad" >}} | bool |
| {{< prop "rotateTeamOnNewRound" >}} | bool |
| {{< prop "autoBalance" >}} | bool |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "AutoTeamEntityData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### AutoTeamEntityData {#constructor-0}
> **AutoTeamEntityData**()

Creates a new [AutoTeamEntityData](/vext/ref/fb/autoteamentitydata) frostbite instance.

### AutoTeamEntityData {#constructor-1}
> **AutoTeamEntityData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [AutoTeamEntityData](/vext/ref/fb/autoteamentitydata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### AutoTeamEntityData {#constructor-2}
> **AutoTeamEntityData**(other: [GameEntityData](/vext/ref/fb/gameentitydata))

Casts an instance of type [GameEntityData](/vext/ref/fb/gameentitydata) to [AutoTeamEntityData](/vext/ref/fb/autoteamentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameEntityData](/vext/ref/fb/gameentitydata) | The instance to cast to [AutoTeamEntityData](/vext/ref/fb/autoteamentitydata). |

### AutoTeamEntityData {#constructor-3}
> **AutoTeamEntityData**(other: [SpatialEntityData](/vext/ref/fb/spatialentitydata))

Casts an instance of type [SpatialEntityData](/vext/ref/fb/spatialentitydata) to [AutoTeamEntityData](/vext/ref/fb/autoteamentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [SpatialEntityData](/vext/ref/fb/spatialentitydata) | The instance to cast to [AutoTeamEntityData](/vext/ref/fb/autoteamentitydata). |

### AutoTeamEntityData {#constructor-4}
> **AutoTeamEntityData**(other: [EntityData](/vext/ref/fb/entitydata))

Casts an instance of type [EntityData](/vext/ref/fb/entitydata) to [AutoTeamEntityData](/vext/ref/fb/autoteamentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [EntityData](/vext/ref/fb/entitydata) | The instance to cast to [AutoTeamEntityData](/vext/ref/fb/autoteamentitydata). |

### AutoTeamEntityData {#constructor-5}
> **AutoTeamEntityData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [AutoTeamEntityData](/vext/ref/fb/autoteamentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [AutoTeamEntityData](/vext/ref/fb/autoteamentitydata). |

### AutoTeamEntityData {#constructor-6}
> **AutoTeamEntityData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [AutoTeamEntityData](/vext/ref/fb/autoteamentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [AutoTeamEntityData](/vext/ref/fb/autoteamentitydata). |

### AutoTeamEntityData {#constructor-7}
> **AutoTeamEntityData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [AutoTeamEntityData](/vext/ref/fb/autoteamentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [AutoTeamEntityData](/vext/ref/fb/autoteamentitydata). |

## Properties
### {{% prop-heading "teamDifferenceToAutoBalance" %}}
> **int**

### {{% prop-heading "teamAssignMode" %}}
> **[TeamAssignMode](/vext/ref/fb/teamassignmode)**

### {{% prop-heading "playerCountNeededToAutoBalance" %}}
> **int**

### {{% prop-heading "forceIntoSquad" %}}
> **bool**

### {{% prop-heading "rotateTeamOnNewRound" %}}
> **bool**

### {{% prop-heading "autoBalance" %}}
> **bool**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [AutoTeamEntityData](/vext/ref/fb/autoteamentitydata) type.

