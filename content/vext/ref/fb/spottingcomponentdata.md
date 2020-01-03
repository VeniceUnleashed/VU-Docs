---
title: SpottingComponentData
---
### Base Classes

[ComponentData](ComponentData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                      | Description                                                                                                                       |
| -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| SpottingComponentData()                                                          | Create a new instance of this container type.                                                                                     |
| SpottingComponentData(SpottingComponentData other)                               | Create a reference copy of an instance of the same type.                                                                          |
| SpottingComponentData([ComponentData](ComponentData) other)                      | Upcast an instance of type [ComponentData](ComponentData) to [SpottingComponentData](SpottingComponentData).                      |
| SpottingComponentData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [SpottingComponentData](SpottingComponentData).                    |
| SpottingComponentData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [SpottingComponentData](SpottingComponentData).              |
| SpottingComponentData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SpottingComponentData](SpottingComponentData). |

## Properties

| Name                              | Type   | Description |
| --------------------------------- | ------ | ----------- |
| spottingFov                       | number |             |
| teamOrderFov                      | number |             |
| spottingDistance                  | number |             |
| passiveSpottingTimeInterval       | number |             |
| timeRequiredToPassiveSpot         | number |             |
| orderNeedAmmoPercentage           | number |             |
| orderHealPercentage               | number |             |
| orderRepairPercentage             | number |             |
| pickupOrderDistance               | number |             |
| healOrderDistance                 | number |             |
| ammoOrderDistance                 | number |             |
| repairOrderDistance               | number |             |
| coolDownHistoryTime               | number |             |
| coolDownAllowedSpotsWithinHistory | number |             |
| onlyAllowedToHaveOneSpottedPlayer | bool   |             |

## Methods

| Type                                           | Name            | Parameters                                     |
| ---------------------------------------------- | --------------- | ---------------------------------------------- |
| [SpottingComponentData](SpottingComponentData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SpottingComponentData](SpottingComponentData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
