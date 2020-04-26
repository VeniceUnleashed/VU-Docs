---
title: UIMinimapConfig
---

## Summary

### Constructors

|  |
| --- |
| **[UIMinimapConfig](#constructor-0)**() |
| **[UIMinimapConfig](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "combatAreaCameraDelay" >}} | float |
| {{< prop "cameraInterpolationTime" >}} | float |
| {{< prop "combatAreaFadeSpeed" >}} | float |
| {{< prop "zoomStates" >}} | [UIMinimapZoomConfig](/vext/ref/fb/uiminimapzoomconfig)[] |
| {{< prop "cameraPanSensitivity" >}} | float |
| {{< prop "minVelocity" >}} | float |
| {{< prop "maxVelocity" >}} | float |
| {{< prop "velocityModifier" >}} | float |
| {{< prop "disableDefaultState" >}} | bool |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [UIMinimapConfig](/vext/ref/fb/uiminimapconfig) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "UIMinimapConfig" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### UIMinimapConfig {#constructor-0}

> **UIMinimapConfig**()

Creates a new [UIMinimapConfig](/vext/ref/fb/uiminimapconfig) frostbite instance.

### UIMinimapConfig {#constructor-1}

> **UIMinimapConfig**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [UIMinimapConfig](/vext/ref/fb/uiminimapconfig) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "combatAreaCameraDelay" %}}

> **float**

### {{% prop-heading "cameraInterpolationTime" %}}

> **float**

### {{% prop-heading "combatAreaFadeSpeed" %}}

> **float**

### {{% prop-heading "zoomStates" %}}

> **[UIMinimapZoomConfig](/vext/ref/fb/uiminimapzoomconfig)**[]

### {{% prop-heading "cameraPanSensitivity" %}}

> **float**

### {{% prop-heading "minVelocity" %}}

> **float**

### {{% prop-heading "maxVelocity" %}}

> **float**

### {{% prop-heading "velocityModifier" %}}

> **float**

### {{% prop-heading "disableDefaultState" %}}

> **bool**

## Methods

### Clone {#clone}

> **Clone**(): [UIMinimapConfig](/vext/ref/fb/uiminimapconfig)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[UIMinimapConfig](/vext/ref/fb/uiminimapconfig)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [UIMinimapConfig](/vext/ref/fb/uiminimapconfig) type.

