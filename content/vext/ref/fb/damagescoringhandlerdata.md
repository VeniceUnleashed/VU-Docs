---
title: DamageScoringHandlerData
---
### Base Classes

[ScoringHandlerData](/vext/ref/fb/scoringhandlerdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                         | Description                                                                                                                             |
| ----------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| DamageScoringHandlerData()                                                          | Create a new instance of this container type.                                                                                           |
| DamageScoringHandlerData(DamageScoringHandlerData other)                            | Create a reference copy of an instance of the same type.                                                                                |
| DamageScoringHandlerData([ScoringHandlerData](/vext/ref/fb/scoringhandlerdata/) other)            | Upcast an instance of type [ScoringHandlerData](/vext/ref/fb/scoringhandlerdata/) to [DamageScoringHandlerData](/vext/ref/fb/damagescoringhandlerdata/).            |
| DamageScoringHandlerData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [DamageScoringHandlerData](/vext/ref/fb/damagescoringhandlerdata/). |

## Properties

| Name                      | Type   | Description |
| ------------------------- | ------ | ----------- |
| repairVehicleLimit        | number |             |
| damageTeamVehicleLimit    | number |             |
| teamHealingLimit          | number |             |
| teamDamageLimit           | number |             |
| killAssistLimit           | number |             |
| killAssistTimeout         | number |             |
| vehicleDestroyAssistLimit | number |             |
| saviorKillTimeout         | number |             |
| saviorDamageLimit         | number |             |
| hotVehicleTimeout         | number |             |

## Methods

| Type                                                 | Name            | Parameters                                     |
| ---------------------------------------------------- | --------------- | ---------------------------------------------- |
| [DamageScoringHandlerData](/vext/ref/fb/damagescoringhandlerdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [DamageScoringHandlerData](/vext/ref/fb/damagescoringhandlerdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
