---
title: SupportedShootingCommonData
---
### Base Classes

[Asset](/vext/ref/fb/asset/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                            | Description                                                                                                                                   |
| -------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| SupportedShootingCommonData()                                                          | Create a new instance of this container type.                                                                                                 |
| SupportedShootingCommonData(SupportedShootingCommonData other)                         | Create a reference copy of an instance of the same type.                                                                                      |
| SupportedShootingCommonData([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [SupportedShootingCommonData](/vext/ref/fb/supportedshootingcommondata/).                                      |
| SupportedShootingCommonData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SupportedShootingCommonData](/vext/ref/fb/supportedshootingcommondata/). |

## Properties

| Name                         | Type                                                                     | Description |
| ---------------------------- | ------------------------------------------------------------------------ | ----------- |
| aimingConstraints            | [AimingConstraintsData](/vext/ref/fb/aimingconstraintsdata/)                           |             |
| enterSupportedShootingAction | [EntryInputActionEnum](/vext/ref/fb/entryinputactionenum/)                             |             |
| binding                      | [SupportedShootingBinding](/vext/ref/fb/supportedshootingbinding/)                     |             |
| stand                        | [SupportedShootingProximityChecking](/vext/ref/fb/supportedshootingproximitychecking/) |             |
| crouch                       | [SupportedShootingProximityChecking](/vext/ref/fb/supportedshootingproximitychecking/) |             |

## Methods

| Type                                                       | Name            | Parameters                                     |
| ---------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [SupportedShootingCommonData](/vext/ref/fb/supportedshootingcommondata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SupportedShootingCommonData](/vext/ref/fb/supportedshootingcommondata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
