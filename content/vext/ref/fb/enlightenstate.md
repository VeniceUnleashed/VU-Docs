---
title: EnlightenState
---

Inherits from [DataContainer](/vext/ref/shared/type/datacontainer)

## Summary

### Constructors

|  |
| --- |
| **[EnlightenState](#constructor-0)**() |
| **[EnlightenState](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[EnlightenState](#constructor-2)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "skyBoxGroundColor" >}} | [Vec3](/vext/ref/shared/type/vec3) |
| {{< prop "skyBoxSunLightColor" >}} | [Vec3](/vext/ref/shared/type/vec3) |
| {{< prop "skyBoxBackLightColor" >}} | [Vec3](/vext/ref/shared/type/vec3) |
| {{< prop "skyBoxSkyColor" >}} | [Vec3](/vext/ref/shared/type/vec3) |
| {{< prop "sunScale" >}} | float |
| {{< prop "outputScale" >}} | float |
| {{< prop "bounceScale" >}} | float |
| {{< prop "skyBoxSunLightColorSize" >}} | float |
| {{< prop "skyBoxBackLightRotationY" >}} | float |
| {{< prop "skyBoxBackLightColorSize" >}} | float |
| {{< prop "skyBoxBackLightRotationX" >}} | float |
| {{< prop "skyBoxEnable" >}} | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "EnlightenState" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### EnlightenState {#constructor-0}

> **EnlightenState**()

Creates a new [EnlightenState](/vext/ref/fb/enlightenstate) frostbite instance.

### EnlightenState {#constructor-1}

> **EnlightenState**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [EnlightenState](/vext/ref/fb/enlightenstate) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### EnlightenState {#constructor-2}

> **EnlightenState**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [EnlightenState](/vext/ref/fb/enlightenstate). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [EnlightenState](/vext/ref/fb/enlightenstate). |

## Properties

### {{% prop-heading "skyBoxGroundColor" %}}

> **[Vec3](/vext/ref/shared/type/vec3)**

### {{% prop-heading "skyBoxSunLightColor" %}}

> **[Vec3](/vext/ref/shared/type/vec3)**

### {{% prop-heading "skyBoxBackLightColor" %}}

> **[Vec3](/vext/ref/shared/type/vec3)**

### {{% prop-heading "skyBoxSkyColor" %}}

> **[Vec3](/vext/ref/shared/type/vec3)**

### {{% prop-heading "sunScale" %}}

> **float**

### {{% prop-heading "outputScale" %}}

> **float**

### {{% prop-heading "bounceScale" %}}

> **float**

### {{% prop-heading "skyBoxSunLightColorSize" %}}

> **float**

### {{% prop-heading "skyBoxBackLightRotationY" %}}

> **float**

### {{% prop-heading "skyBoxBackLightColorSize" %}}

> **float**

### {{% prop-heading "skyBoxBackLightRotationX" %}}

> **float**

### {{% prop-heading "skyBoxEnable" %}}

> **bool**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [EnlightenState](/vext/ref/fb/enlightenstate) type.

