---
title: TransformPartPropertyTrackData
---

Inherits from 
[PropertyTrackData](/vext/ref/fb/propertytrackdata)

## Summary
### Constructors
| |
| ----------- |
| **[TransformPartPropertyTrackData](#constructor-0)**() |
| **[TransformPartPropertyTrackData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[TransformPartPropertyTrackData](#constructor-2)**(other: [PropertyTrackData](/vext/ref/fb/propertytrackdata)) |
| **[TransformPartPropertyTrackData](#constructor-3)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "transformPart" >}} | [TransformPart](/vext/ref/fb/transformpart) |
| {{< prop "preInfinity" >}} | [CurveInfinityType](/vext/ref/fb/curveinfinitytype) |
| {{< prop "postInfinity" >}} | [CurveInfinityType](/vext/ref/fb/curveinfinitytype) |
| {{< prop "keyStartIndex" >}} | int |
| {{< prop "resourceName" >}} | string |
| {{< prop "keyCount" >}} | int |
| {{< prop "weighted" >}} | bool |
| {{< prop "isStatic" >}} | bool |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "TransformPartPropertyTrackData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### TransformPartPropertyTrackData {#constructor-0}
> **TransformPartPropertyTrackData**()

Creates a new [TransformPartPropertyTrackData](/vext/ref/fb/transformpartpropertytrackdata) frostbite instance.

### TransformPartPropertyTrackData {#constructor-1}
> **TransformPartPropertyTrackData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [TransformPartPropertyTrackData](/vext/ref/fb/transformpartpropertytrackdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### TransformPartPropertyTrackData {#constructor-2}
> **TransformPartPropertyTrackData**(other: [PropertyTrackData](/vext/ref/fb/propertytrackdata))

Casts an instance of type [PropertyTrackData](/vext/ref/fb/propertytrackdata) to [TransformPartPropertyTrackData](/vext/ref/fb/transformpartpropertytrackdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [PropertyTrackData](/vext/ref/fb/propertytrackdata) | The instance to cast to [TransformPartPropertyTrackData](/vext/ref/fb/transformpartpropertytrackdata). |

### TransformPartPropertyTrackData {#constructor-3}
> **TransformPartPropertyTrackData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [TransformPartPropertyTrackData](/vext/ref/fb/transformpartpropertytrackdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [TransformPartPropertyTrackData](/vext/ref/fb/transformpartpropertytrackdata). |

## Properties
### {{% prop-heading "transformPart" %}}
> **[TransformPart](/vext/ref/fb/transformpart)**

### {{% prop-heading "preInfinity" %}}
> **[CurveInfinityType](/vext/ref/fb/curveinfinitytype)**

### {{% prop-heading "postInfinity" %}}
> **[CurveInfinityType](/vext/ref/fb/curveinfinitytype)**

### {{% prop-heading "keyStartIndex" %}}
> **int**

### {{% prop-heading "resourceName" %}}
> **string**

### {{% prop-heading "keyCount" %}}
> **int**

### {{% prop-heading "weighted" %}}
> **bool**

### {{% prop-heading "isStatic" %}}
> **bool**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [TransformPartPropertyTrackData](/vext/ref/fb/transformpartpropertytrackdata) type.

