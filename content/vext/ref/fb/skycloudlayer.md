---
title: SkyCloudLayer
---

## Summary

### Constructors

|  |
| --- |
| **[SkyCloudLayer](#constructor-0)**() |
| **[SkyCloudLayer](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "color" >}} | [Vec3](/vext/ref/shared/type/vec3) |
| {{< prop "tileFactor" >}} | float |
| {{< prop "rotation" >}} | float |
| {{< prop "altitude" >}} | float |
| {{< prop "speed" >}} | float |
| {{< prop "sunLightPower" >}} | float |
| {{< prop "ambientLightIntensity" >}} | float |
| {{< prop "sunLightIntensity" >}} | float |
| {{< prop "alphaMul" >}} | float |
| {{< prop "texture" >}} | [TextureAsset](/vext/ref/fb/textureasset) \| nil |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [SkyCloudLayer](/vext/ref/fb/skycloudlayer) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "SkyCloudLayer" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### SkyCloudLayer {#constructor-0}

> **SkyCloudLayer**()

Creates a new [SkyCloudLayer](/vext/ref/fb/skycloudlayer) frostbite instance.

### SkyCloudLayer {#constructor-1}

> **SkyCloudLayer**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [SkyCloudLayer](/vext/ref/fb/skycloudlayer) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "color" %}}

> **[Vec3](/vext/ref/shared/type/vec3)**

### {{% prop-heading "tileFactor" %}}

> **float**

### {{% prop-heading "rotation" %}}

> **float**

### {{% prop-heading "altitude" %}}

> **float**

### {{% prop-heading "speed" %}}

> **float**

### {{% prop-heading "sunLightPower" %}}

> **float**

### {{% prop-heading "ambientLightIntensity" %}}

> **float**

### {{% prop-heading "sunLightIntensity" %}}

> **float**

### {{% prop-heading "alphaMul" %}}

> **float**

### {{% prop-heading "texture" %}}

> **[TextureAsset](/vext/ref/fb/textureasset)** \| **nil**

## Methods

### Clone {#clone}

> **Clone**(): [SkyCloudLayer](/vext/ref/fb/skycloudlayer)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[SkyCloudLayer](/vext/ref/fb/skycloudlayer)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [SkyCloudLayer](/vext/ref/fb/skycloudlayer) type.

