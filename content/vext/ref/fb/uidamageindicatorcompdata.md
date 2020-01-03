---
title: UIDamageIndicatorCompData
---
### Base Classes

[UIComponentData](/vext/ref/fb/uicomponentdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                          | Description                                                                                                                               |
| ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| UIDamageIndicatorCompData()                                                          | Create a new instance of this container type.                                                                                             |
| UIDamageIndicatorCompData(UIDamageIndicatorCompData other)                           | Create a reference copy of an instance of the same type.                                                                                  |
| UIDamageIndicatorCompData([UIComponentData](/vext/ref/fb/uicomponentdata/) other)                  | Upcast an instance of type [UIComponentData](/vext/ref/fb/uicomponentdata/) to [UIDamageIndicatorCompData](/vext/ref/fb/uidamageindicatorcompdata/).                  |
| UIDamageIndicatorCompData([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [UIDamageIndicatorCompData](/vext/ref/fb/uidamageindicatorcompdata/).                                      |
| UIDamageIndicatorCompData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UIDamageIndicatorCompData](/vext/ref/fb/uidamageindicatorcompdata/). |

## Properties

| Name          | Type   | Description |
| ------------- | ------ | ----------- |
| maxUpdateTime | number |             |

## Methods

| Type                                                   | Name            | Parameters                                     |
| ------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [UIDamageIndicatorCompData](/vext/ref/fb/uidamageindicatorcompdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [UIDamageIndicatorCompData](/vext/ref/fb/uidamageindicatorcompdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
