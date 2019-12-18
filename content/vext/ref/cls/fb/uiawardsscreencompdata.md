---
title: UIAwardsScreenCompData (Frostbite Container)
---
### Base Classes

[UIComponentData](UIComponentData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                       | Description                                                                                                                         |
| --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| UIAwardsScreenCompData()                                                          | Create a new instance of this container type.                                                                                       |
| UIAwardsScreenCompData(UIAwardsScreenCompData other)                              | Create a reference copy of an instance of the same type.                                                                            |
| UIAwardsScreenCompData([UIComponentData](UIComponentData) other)                  | Upcast an instance of type [UIComponentData](UIComponentData) to [UIAwardsScreenCompData](UIAwardsScreenCompData).                  |
| UIAwardsScreenCompData([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [UIAwardsScreenCompData](UIAwardsScreenCompData).                                      |
| UIAwardsScreenCompData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [UIAwardsScreenCompData](UIAwardsScreenCompData). |

## Properties

| Name              | Type                                               | Description |
| ----------------- | -------------------------------------------------- | ----------- |
| trackableAwardRow | [StatsCategoryBaseData](StatsCategoryBaseData)\[\] |             |
| trackableAwardCol | [StatsCategoryBaseData](StatsCategoryBaseData)\[\] |             |

## Methods

| Type                                             | Name            | Parameters                                     |
| ------------------------------------------------ | --------------- | ---------------------------------------------- |
| [UIAwardsScreenCompData](UIAwardsScreenCompData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [UIAwardsScreenCompData](UIAwardsScreenCompData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
