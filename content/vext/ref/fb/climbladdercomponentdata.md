---
title: ClimbLadderComponentData
---
### Base Classes

[ComponentData](/vext/ref/fb/componentdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                         | Description                                                                                                                             |
| ----------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| ClimbLadderComponentData()                                                          | Create a new instance of this container type.                                                                                           |
| ClimbLadderComponentData(ClimbLadderComponentData other)                            | Create a reference copy of an instance of the same type.                                                                                |
| ClimbLadderComponentData([ComponentData](/vext/ref/fb/componentdata/) other)                      | Upcast an instance of type [ComponentData](/vext/ref/fb/componentdata/) to [ClimbLadderComponentData](/vext/ref/fb/climbladdercomponentdata/).                      |
| ClimbLadderComponentData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [ClimbLadderComponentData](/vext/ref/fb/climbladdercomponentdata/).                    |
| ClimbLadderComponentData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [ClimbLadderComponentData](/vext/ref/fb/climbladdercomponentdata/).              |
| ClimbLadderComponentData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [ClimbLadderComponentData](/vext/ref/fb/climbladdercomponentdata/). |

## Properties

| Name                     | Type                                     | Description |
| ------------------------ | ---------------------------------------- | ----------- |
| climbPhase               | number                                   |             |
| connectPhase             | number                                   |             |
| connectJointDisplacement | number                                   |             |
| binding                  | [ClimbLadderBinding](/vext/ref/fb/climbladderbinding/) |             |

## Methods

| Type                                                 | Name            | Parameters                                     |
| ---------------------------------------------------- | --------------- | ---------------------------------------------- |
| [ClimbLadderComponentData](/vext/ref/fb/climbladdercomponentdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [ClimbLadderComponentData](/vext/ref/fb/climbladdercomponentdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
