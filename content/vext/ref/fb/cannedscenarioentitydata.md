---
title: CannedScenarioEntityData
---
### Base Classes

[EntityData](/vext/ref/fb/entitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                         | Description                                                                                                                             |
| ----------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| CannedScenarioEntityData()                                                          | Create a new instance of this container type.                                                                                           |
| CannedScenarioEntityData(CannedScenarioEntityData other)                            | Create a reference copy of an instance of the same type.                                                                                |
| CannedScenarioEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [CannedScenarioEntityData](/vext/ref/fb/cannedscenarioentitydata/).                            |
| CannedScenarioEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [CannedScenarioEntityData](/vext/ref/fb/cannedscenarioentitydata/).                    |
| CannedScenarioEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [CannedScenarioEntityData](/vext/ref/fb/cannedscenarioentitydata/).              |
| CannedScenarioEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [CannedScenarioEntityData](/vext/ref/fb/cannedscenarioentitydata/). |

## Properties

| Name                                 | Type                                             | Description |
| ------------------------------------ | ------------------------------------------------ | ----------- |
| cannedAnimBinding                    | [CannedAnimationBinding](/vext/ref/fb/cannedanimationbinding/) |             |
| animationEntitySpacePriority         | number                                           |             |
| alwaysClearEntitySpaceWhenInScenario | bool                                             |             |

## Methods

| Type                                                 | Name            | Parameters                                     |
| ---------------------------------------------------- | --------------- | ---------------------------------------------- |
| [CannedScenarioEntityData](/vext/ref/fb/cannedscenarioentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [CannedScenarioEntityData](/vext/ref/fb/cannedscenarioentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
