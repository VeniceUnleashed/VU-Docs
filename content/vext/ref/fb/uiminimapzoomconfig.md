---
title: UIMinimapZoomConfig
---

## Summary

### Constructors

|  |
| --- |
| **[UIMinimapZoomConfig](#constructor-0)**() |
| **[UIMinimapZoomConfig](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "state" >}} | [UIMinimapZoomState](/vext/ref/fb/uiminimapzoomstate) |
| {{< prop "data" >}} | [MinimapData](/vext/ref/fb/minimapdata) |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [UIMinimapZoomConfig](/vext/ref/fb/uiminimapzoomconfig) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "UIMinimapZoomConfig" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### UIMinimapZoomConfig {#constructor-0}

> **UIMinimapZoomConfig**()

Creates a new [UIMinimapZoomConfig](/vext/ref/fb/uiminimapzoomconfig) frostbite instance.

### UIMinimapZoomConfig {#constructor-1}

> **UIMinimapZoomConfig**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [UIMinimapZoomConfig](/vext/ref/fb/uiminimapzoomconfig) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "state" %}}

> **[UIMinimapZoomState](/vext/ref/fb/uiminimapzoomstate)**

### {{% prop-heading "data" %}}

> **[MinimapData](/vext/ref/fb/minimapdata)**

## Methods

### Clone {#clone}

> **Clone**(): [UIMinimapZoomConfig](/vext/ref/fb/uiminimapzoomconfig)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[UIMinimapZoomConfig](/vext/ref/fb/uiminimapzoomconfig)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [UIMinimapZoomConfig](/vext/ref/fb/uiminimapzoomconfig) type.

