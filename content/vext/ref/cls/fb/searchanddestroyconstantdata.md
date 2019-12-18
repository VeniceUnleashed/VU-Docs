---
title: SearchAndDestroyConstantData (Frostbite Container)
---
### Base Classes

[Asset](Asset)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                             | Description                                                                                                                                     |
| --------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| SearchAndDestroyConstantData()                                                          | Create a new instance of this container type.                                                                                                   |
| SearchAndDestroyConstantData(SearchAndDestroyConstantData other)                        | Create a reference copy of an instance of the same type.                                                                                        |
| SearchAndDestroyConstantData([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [SearchAndDestroyConstantData](SearchAndDestroyConstantData).                                      |
| SearchAndDestroyConstantData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [SearchAndDestroyConstantData](SearchAndDestroyConstantData). |

## Properties

| Name                          | Type   | Description |
| ----------------------------- | ------ | ----------- |
| timeToWaitMin                 | number |             |
| timeToWaitMax                 | number |             |
| defaultSearchAndDestroyRadius | number |             |

## Methods

| Type                                                         | Name            | Parameters                                     |
| ------------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [SearchAndDestroyConstantData](SearchAndDestroyConstantData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [SearchAndDestroyConstantData](SearchAndDestroyConstantData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
