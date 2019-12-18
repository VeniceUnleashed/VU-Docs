---
title: ExtendedConstraintsData (Frostbite Container)
---
### Base Classes

[DataContainer](/vext/ref/cls/shr/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                        | Description                                                                                                                           |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| ExtendedConstraintsData()                                                          | Create a new instance of this container type.                                                                                         |
| ExtendedConstraintsData(ExtendedConstraintsData other)                             | Create a reference copy of an instance of the same type.                                                                              |
| ExtendedConstraintsData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [ExtendedConstraintsData](ExtendedConstraintsData). |

## Properties

| Name                 | Type   | Description |
| -------------------- | ------ | ----------- |
| heading              | number |             |
| width                | number |             |
| falloff              | number |             |
| angularConstraintMin | number |             |
| angularConstraintMax | number |             |

## Methods

| Type                                               | Name            | Parameters                                     |
| -------------------------------------------------- | --------------- | ---------------------------------------------- |
| [ExtendedConstraintsData](ExtendedConstraintsData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [ExtendedConstraintsData](ExtendedConstraintsData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
