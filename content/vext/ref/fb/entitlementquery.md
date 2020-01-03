---
title: EntitlementQuery
---
### Base Classes

[Asset](/vext/ref/fb/asset/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                 | Description                                                                                                             |
| --------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| EntitlementQuery()                                                          | Create a new instance of this container type.                                                                           |
| EntitlementQuery(EntitlementQuery other)                                    | Create a reference copy of an instance of the same type.                                                                |
| EntitlementQuery([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [EntitlementQuery](/vext/ref/fb/entitlementquery/).                                      |
| EntitlementQuery([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [EntitlementQuery](/vext/ref/fb/entitlementquery/). |

## Properties

| Name             | Type                                   | Description |
| ---------------- | -------------------------------------- | ----------- |
| entitlementsData | [EntitlementData](/vext/ref/fb/entitlementdata/)\[\] |             |
| groupNames       | string\[\]                             |             |
| platform         | [GamePlatform](/vext/ref/fb/gameplatform/)           |             |
| entitlementTag   | string                                 |             |
| productId        | string                                 |             |
| projectId        | string                                 |             |

## Methods

| Type                                 | Name            | Parameters                                     |
| ------------------------------------ | --------------- | ---------------------------------------------- |
| [EntitlementQuery](/vext/ref/fb/entitlementquery/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [EntitlementQuery](/vext/ref/fb/entitlementquery/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
