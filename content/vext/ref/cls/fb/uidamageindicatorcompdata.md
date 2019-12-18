---
title: UIDamageIndicatorCompData (Frostbite Container)
---
### Base Classes

[UIComponentData](UIComponentData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                          | Description                                                                                                                               |
| ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| UIDamageIndicatorCompData()                                                          | Create a new instance of this container type.                                                                                             |
| UIDamageIndicatorCompData(UIDamageIndicatorCompData other)                           | Create a reference copy of an instance of the same type.                                                                                  |
| UIDamageIndicatorCompData([UIComponentData](UIComponentData) other)                  | Upcast an instance of type [UIComponentData](UIComponentData) to [UIDamageIndicatorCompData](UIDamageIndicatorCompData).                  |
| UIDamageIndicatorCompData([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [UIDamageIndicatorCompData](UIDamageIndicatorCompData).                                      |
| UIDamageIndicatorCompData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [UIDamageIndicatorCompData](UIDamageIndicatorCompData). |

## Properties

| Name          | Type   | Description |
| ------------- | ------ | ----------- |
| maxUpdateTime | number |             |

## Methods

| Type                                                   | Name            | Parameters                                     |
| ------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [UIDamageIndicatorCompData](UIDamageIndicatorCompData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [UIDamageIndicatorCompData](UIDamageIndicatorCompData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
