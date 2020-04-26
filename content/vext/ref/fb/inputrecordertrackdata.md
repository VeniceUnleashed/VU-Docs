---
title: InputRecorderTrackData
---

## Summary

### Constructors

|  |
| --- |
| **[InputRecorderTrackData](#constructor-0)**() |
| **[InputRecorderTrackData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "name" >}} | string |
| {{< prop "propertyTrack" >}} | [FloatPropertyTrackData](/vext/ref/fb/floatpropertytrackdata) \| nil |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [InputRecorderTrackData](/vext/ref/fb/inputrecordertrackdata) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "InputRecorderTrackData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### InputRecorderTrackData {#constructor-0}

> **InputRecorderTrackData**()

Creates a new [InputRecorderTrackData](/vext/ref/fb/inputrecordertrackdata) frostbite instance.

### InputRecorderTrackData {#constructor-1}

> **InputRecorderTrackData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [InputRecorderTrackData](/vext/ref/fb/inputrecordertrackdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "name" %}}

> **string**

### {{% prop-heading "propertyTrack" %}}

> **[FloatPropertyTrackData](/vext/ref/fb/floatpropertytrackdata)** \| **nil**

## Methods

### Clone {#clone}

> **Clone**(): [InputRecorderTrackData](/vext/ref/fb/inputrecordertrackdata)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[InputRecorderTrackData](/vext/ref/fb/inputrecordertrackdata)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [InputRecorderTrackData](/vext/ref/fb/inputrecordertrackdata) type.

