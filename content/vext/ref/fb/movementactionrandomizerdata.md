---
title: MovementActionRandomizerData
---
### Base Classes

[MovementActionData](/vext/ref/fb/movementactiondata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                             | Description                                                                                                                                     |
| --------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| MovementActionRandomizerData()                                                          | Create a new instance of this container type.                                                                                                   |
| MovementActionRandomizerData(MovementActionRandomizerData other)                        | Create a reference copy of an instance of the same type.                                                                                        |
| MovementActionRandomizerData([MovementActionData](/vext/ref/fb/movementactiondata/) other)            | Upcast an instance of type [MovementActionData](/vext/ref/fb/movementactiondata/) to [MovementActionRandomizerData](/vext/ref/fb/movementactionrandomizerdata/).            |
| MovementActionRandomizerData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [MovementActionRandomizerData](/vext/ref/fb/movementactionrandomizerdata/). |

## Properties

| Name                               | Type                                         | Description |
| ---------------------------------- | -------------------------------------------- | ----------- |
| actions                            | [MovementActionData](/vext/ref/fb/movementactiondata/)\[\] |             |
| reinsertIntoRandomizedListAfterUse | bool                                         |             |

## Methods

| Type                                                         | Name            | Parameters                                     |
| ------------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [MovementActionRandomizerData](/vext/ref/fb/movementactionrandomizerdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [MovementActionRandomizerData](/vext/ref/fb/movementactionrandomizerdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
