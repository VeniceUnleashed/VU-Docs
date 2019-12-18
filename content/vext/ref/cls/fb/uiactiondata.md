---
title: UIActionData (Frostbite Container)
---
### Base Classes

[Asset](Asset)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                             | Description                                                                                                     |
| ----------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| UIActionData()                                                          | Create a new instance of this container type.                                                                   |
| UIActionData(UIActionData other)                                        | Create a reference copy of an instance of the same type.                                                        |
| UIActionData([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [UIActionData](UIActionData).                                      |
| UIActionData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [UIActionData](UIActionData). |

## Properties

| Name       | Type       | Description |
| ---------- | ---------- | ----------- |
| actionKeys | string\[\] |             |

## Methods

| Type                         | Name            | Parameters                                     |
| ---------------------------- | --------------- | ---------------------------------------------- |
| [UIActionData](UIActionData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [UIActionData](UIActionData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
