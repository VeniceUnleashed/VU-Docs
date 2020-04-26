---
title: TicketCounterEntityData
---

Inherits from 
[GameEntityData](/vext/ref/fb/gameentitydata)

## Summary
### Constructors
| |
| ----------- |
| **[TicketCounterEntityData](#constructor-0)**() |
| **[TicketCounterEntityData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[TicketCounterEntityData](#constructor-2)**(other: [GameEntityData](/vext/ref/fb/gameentitydata)) |
| **[TicketCounterEntityData](#constructor-3)**(other: [SpatialEntityData](/vext/ref/fb/spatialentitydata)) |
| **[TicketCounterEntityData](#constructor-4)**(other: [EntityData](/vext/ref/fb/entitydata)) |
| **[TicketCounterEntityData](#constructor-5)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[TicketCounterEntityData](#constructor-6)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[TicketCounterEntityData](#constructor-7)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "ticketPercentages" >}} | [TicketCountPercentage](/vext/ref/fb/ticketcountpercentage)[] |
| {{< prop "ticketLossPerMin" >}} | int |
| {{< prop "decreaseTickets" >}} | [TicketDecreaseType](/vext/ref/fb/ticketdecreasetype) |
| {{< prop "teamId" >}} | [TeamId](/vext/ref/fb/teamid) |
| {{< prop "ticketLossWhenLostAll" >}} | int |
| {{< prop "ticketLossWhenLostAllControlsPoint" >}} | int |
| {{< prop "initialTicketCount" >}} | int |
| {{< prop "ticketLossStart" >}} | int |
| {{< prop "setBestSquadSpawner" >}} | bool |
| {{< prop "haltTicketLossOnEqualPointCount" >}} | bool |
| {{< prop "resetCapturePointsOnReset" >}} | bool |
| {{< prop "spawnAlwaysAllowed" >}} | bool |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "TicketCounterEntityData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### TicketCounterEntityData {#constructor-0}
> **TicketCounterEntityData**()

Creates a new [TicketCounterEntityData](/vext/ref/fb/ticketcounterentitydata) frostbite instance.

### TicketCounterEntityData {#constructor-1}
> **TicketCounterEntityData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [TicketCounterEntityData](/vext/ref/fb/ticketcounterentitydata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### TicketCounterEntityData {#constructor-2}
> **TicketCounterEntityData**(other: [GameEntityData](/vext/ref/fb/gameentitydata))

Casts an instance of type [GameEntityData](/vext/ref/fb/gameentitydata) to [TicketCounterEntityData](/vext/ref/fb/ticketcounterentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameEntityData](/vext/ref/fb/gameentitydata) | The instance to cast to [TicketCounterEntityData](/vext/ref/fb/ticketcounterentitydata). |

### TicketCounterEntityData {#constructor-3}
> **TicketCounterEntityData**(other: [SpatialEntityData](/vext/ref/fb/spatialentitydata))

Casts an instance of type [SpatialEntityData](/vext/ref/fb/spatialentitydata) to [TicketCounterEntityData](/vext/ref/fb/ticketcounterentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [SpatialEntityData](/vext/ref/fb/spatialentitydata) | The instance to cast to [TicketCounterEntityData](/vext/ref/fb/ticketcounterentitydata). |

### TicketCounterEntityData {#constructor-4}
> **TicketCounterEntityData**(other: [EntityData](/vext/ref/fb/entitydata))

Casts an instance of type [EntityData](/vext/ref/fb/entitydata) to [TicketCounterEntityData](/vext/ref/fb/ticketcounterentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [EntityData](/vext/ref/fb/entitydata) | The instance to cast to [TicketCounterEntityData](/vext/ref/fb/ticketcounterentitydata). |

### TicketCounterEntityData {#constructor-5}
> **TicketCounterEntityData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [TicketCounterEntityData](/vext/ref/fb/ticketcounterentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [TicketCounterEntityData](/vext/ref/fb/ticketcounterentitydata). |

### TicketCounterEntityData {#constructor-6}
> **TicketCounterEntityData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [TicketCounterEntityData](/vext/ref/fb/ticketcounterentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [TicketCounterEntityData](/vext/ref/fb/ticketcounterentitydata). |

### TicketCounterEntityData {#constructor-7}
> **TicketCounterEntityData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [TicketCounterEntityData](/vext/ref/fb/ticketcounterentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [TicketCounterEntityData](/vext/ref/fb/ticketcounterentitydata). |

## Properties
### {{% prop-heading "ticketPercentages" %}}
> **[TicketCountPercentage](/vext/ref/fb/ticketcountpercentage)**[]

### {{% prop-heading "ticketLossPerMin" %}}
> **int**

### {{% prop-heading "decreaseTickets" %}}
> **[TicketDecreaseType](/vext/ref/fb/ticketdecreasetype)**

### {{% prop-heading "teamId" %}}
> **[TeamId](/vext/ref/fb/teamid)**

### {{% prop-heading "ticketLossWhenLostAll" %}}
> **int**

### {{% prop-heading "ticketLossWhenLostAllControlsPoint" %}}
> **int**

### {{% prop-heading "initialTicketCount" %}}
> **int**

### {{% prop-heading "ticketLossStart" %}}
> **int**

### {{% prop-heading "setBestSquadSpawner" %}}
> **bool**

### {{% prop-heading "haltTicketLossOnEqualPointCount" %}}
> **bool**

### {{% prop-heading "resetCapturePointsOnReset" %}}
> **bool**

### {{% prop-heading "spawnAlwaysAllowed" %}}
> **bool**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [TicketCounterEntityData](/vext/ref/fb/ticketcounterentitydata) type.

