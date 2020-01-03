---
title: CriteriaGateList
---
### Base Classes

[Asset](/vext/ref/fb/asset/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                 | Description                                                                                                             |
| --------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| CriteriaGateList()                                                          | Create a new instance of this container type.                                                                           |
| CriteriaGateList(CriteriaGateList other)                                    | Create a reference copy of an instance of the same type.                                                                |
| CriteriaGateList([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [CriteriaGateList](/vext/ref/fb/criteriagatelist/).                                      |
| CriteriaGateList([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [CriteriaGateList](/vext/ref/fb/criteriagatelist/). |

## Properties

| Name          | Type       | Description |
| ------------- | ---------- | ----------- |
| criteriaGates | number\[\] |             |

## Methods

| Type                                 | Name            | Parameters                                     |
| ------------------------------------ | --------------- | ---------------------------------------------- |
| [CriteriaGateList](/vext/ref/fb/criteriagatelist/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [CriteriaGateList](/vext/ref/fb/criteriagatelist/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
