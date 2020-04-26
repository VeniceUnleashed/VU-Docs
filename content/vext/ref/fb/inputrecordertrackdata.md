---
title: InputRecorderTrackData
---


## Summary
### Constructors
| |
| ----------- |
| **[InputRecorderTrackData](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "name" >}} | string |
| {{< prop "propertyTrack" >}} | [FloatPropertyTrackData](/vext/ref/fb/floatpropertytrackdata) \| nil |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [InputRecorderTrackData](/vext/ref/fb/inputrecordertrackdata) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "InputRecorderTrackData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### InputRecorderTrackData {#constructor-0}
> **InputRecorderTrackData**()

Creates a new [InputRecorderTrackData](/vext/ref/fb/inputrecordertrackdata) frostbite structure.

## Properties
### {{% prop-heading "name" %}}
> **string**

### {{% prop-heading "propertyTrack" %}}
> **[FloatPropertyTrackData](/vext/ref/fb/floatpropertytrackdata)** | **nil**

## Methods
### Clone
> **Clone**(): [InputRecorderTrackData](/vext/ref/fb/inputrecordertrackdata)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[InputRecorderTrackData](/vext/ref/fb/inputrecordertrackdata)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [InputRecorderTrackData](/vext/ref/fb/inputrecordertrackdata) type.

