---
title: MovementActionRandomizerData
---
### Base Classes

[MovementActionData](MovementActionData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                             | Description                                                                                                                                     |
| --------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| MovementActionRandomizerData()                                                          | Create a new instance of this container type.                                                                                                   |
| MovementActionRandomizerData(MovementActionRandomizerData other)                        | Create a reference copy of an instance of the same type.                                                                                        |
| MovementActionRandomizerData([MovementActionData](MovementActionData) other)            | Upcast an instance of type [MovementActionData](MovementActionData) to [MovementActionRandomizerData](MovementActionRandomizerData).            |
| MovementActionRandomizerData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [MovementActionRandomizerData](MovementActionRandomizerData). |

## Properties

| Name                               | Type                                         | Description |
| ---------------------------------- | -------------------------------------------- | ----------- |
| actions                            | [MovementActionData](MovementActionData)\[\] |             |
| reinsertIntoRandomizedListAfterUse | bool                                         |             |

## Methods

| Type                                                         | Name            | Parameters                                     |
| ------------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [MovementActionRandomizerData](MovementActionRandomizerData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [MovementActionRandomizerData](MovementActionRandomizerData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
