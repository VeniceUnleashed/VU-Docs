---
title: SpottingComponentData
---
### Base Classes

[ComponentData](/vext/ref/fb/componentdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                      | Description                                                                                                                       |
| -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| SpottingComponentData()                                                          | Create a new instance of this container type.                                                                                     |
| SpottingComponentData(SpottingComponentData other)                               | Create a reference copy of an instance of the same type.                                                                          |
| SpottingComponentData([ComponentData](/vext/ref/fb/componentdata/) other)                      | Upcast an instance of type [ComponentData](/vext/ref/fb/componentdata/) to [SpottingComponentData](/vext/ref/fb/spottingcomponentdata/).                      |
| SpottingComponentData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [SpottingComponentData](/vext/ref/fb/spottingcomponentdata/).                    |
| SpottingComponentData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [SpottingComponentData](/vext/ref/fb/spottingcomponentdata/).              |
| SpottingComponentData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SpottingComponentData](/vext/ref/fb/spottingcomponentdata/). |

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
| [SpottingComponentData](/vext/ref/fb/spottingcomponentdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SpottingComponentData](/vext/ref/fb/spottingcomponentdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
