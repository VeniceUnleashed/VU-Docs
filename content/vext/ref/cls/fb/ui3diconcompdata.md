---
title: UI3dIconCompData (Frostbite Container)
---
### Base Classes

[UIComponentData](UIComponentData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                 | Description                                                                                                             |
| --------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| UI3dIconCompData()                                                          | Create a new instance of this container type.                                                                           |
| UI3dIconCompData(UI3dIconCompData other)                                    | Create a reference copy of an instance of the same type.                                                                |
| UI3dIconCompData([UIComponentData](UIComponentData) other)                  | Upcast an instance of type [UIComponentData](UIComponentData) to [UI3dIconCompData](UI3dIconCompData).                  |
| UI3dIconCompData([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [UI3dIconCompData](UI3dIconCompData).                                      |
| UI3dIconCompData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [UI3dIconCompData](UI3dIconCompData). |

## Properties

| Name                       | Type                              | Description |
| -------------------------- | --------------------------------- | ----------- |
| pixelOffset                | [Vec2](/vext/ref/cls/shr/Vec2) |             |
| iconSize                   | number                            |             |
| maxFarFade                 | number                            |             |
| maxCloseFade               | number                            |             |
| snapSafeZone               | number                            |             |
| snapCenterYOffset          | number                            |             |
| shrinkSnapAnimationTime    | number                            |             |
| trackerHudRadiusX          | number                            |             |
| trackerHudRadiusY          | number                            |             |
| maxLookAtThreshold         | number                            |             |
| minLookAtThreshold         | number                            |             |
| minLookAtThresholdDistance | number                            |             |
| drawDistance               | number                            |             |
| fadeDistance               | number                            |             |
| fadeEndDistance            | number                            |             |
| minimumDrawDistance        | number                            |             |
| minimumFadeDistance        | number                            |             |
| maxTagUpdatesPerFrame      | number                            |             |
| verticalOffset             | number                            |             |
| showLabelRange             | number                            |             |
| teamRadioDistance          | number                            |             |
| scaleDistance              | number                            |             |
| maxScaleMod                | number                            |             |
| maxXRotation               | number                            |             |
| maxYRotation               | number                            |             |
| horisontalOffset           | number                            |             |
| showSupportAmmoThreshold   | number                            |             |
| verticalOffsetMaxOffset    | number                            |             |
| verticalOffsetScaleFactor  | number                            |             |
| showEngineerArmorThreshold | number                            |             |
| showMedicHealthThreshold   | number                            |             |
| snapIcons                  | bool                              |             |
| circularSnap               | bool                              |             |
| onlyShowSnapped            | bool                              |             |

## Methods

| Type                                 | Name            | Parameters                                     |
| ------------------------------------ | --------------- | ---------------------------------------------- |
| [UI3dIconCompData](UI3dIconCompData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [UI3dIconCompData](UI3dIconCompData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
