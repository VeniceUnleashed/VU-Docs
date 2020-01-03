---
title: TurretControlConstantData
---
### Base Classes

[Asset](/vext/ref/fb/asset/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                          | Description                                                                                                                               |
| ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| TurretControlConstantData()                                                          | Create a new instance of this container type.                                                                                             |
| TurretControlConstantData(TurretControlConstantData other)                           | Create a reference copy of an instance of the same type.                                                                                  |
| TurretControlConstantData([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [TurretControlConstantData](/vext/ref/fb/turretcontrolconstantdata/).                                      |
| TurretControlConstantData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [TurretControlConstantData](/vext/ref/fb/turretcontrolconstantdata/). |

## Properties

| Name            | Type   | Description |
| --------------- | ------ | ----------- |
| searchLookSpeed | number |             |
| slowLookSpeed   | number |             |
| normalLookSpeed | number |             |
| fastLookSpeed   | number |             |

## Methods

| Type                                                   | Name            | Parameters                                     |
| ------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [TurretControlConstantData](/vext/ref/fb/turretcontrolconstantdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [TurretControlConstantData](/vext/ref/fb/turretcontrolconstantdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
