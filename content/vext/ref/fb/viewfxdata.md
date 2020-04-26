---
title: ViewFxData
---

Inherits from [DataContainer](/vext/ref/shared/type/datacontainer)

## Summary

### Constructors

|  |
| --- |
| **[ViewFxData](#constructor-0)**() |
| **[ViewFxData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[ViewFxData](#constructor-2)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "poissonRadialBlur" >}} | [PoissonRadialBlurData](/vext/ref/fb/poissonradialblurdata) |
| {{< prop "colorTint" >}} | [ColorTintData](/vext/ref/fb/colortintdata) |
| {{< prop "blurAdd" >}} | float |
| {{< prop "colorTintEnable" >}} | bool |
| {{< prop "poissonRadialBlurEnable" >}} | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "ViewFxData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### ViewFxData {#constructor-0}

> **ViewFxData**()

Creates a new [ViewFxData](/vext/ref/fb/viewfxdata) frostbite instance.

### ViewFxData {#constructor-1}

> **ViewFxData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [ViewFxData](/vext/ref/fb/viewfxdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### ViewFxData {#constructor-2}

> **ViewFxData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [ViewFxData](/vext/ref/fb/viewfxdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [ViewFxData](/vext/ref/fb/viewfxdata). |

## Properties

### {{% prop-heading "poissonRadialBlur" %}}

> **[PoissonRadialBlurData](/vext/ref/fb/poissonradialblurdata)**

### {{% prop-heading "colorTint" %}}

> **[ColorTintData](/vext/ref/fb/colortintdata)**

### {{% prop-heading "blurAdd" %}}

> **float**

### {{% prop-heading "colorTintEnable" %}}

> **bool**

### {{% prop-heading "poissonRadialBlurEnable" %}}

> **bool**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [ViewFxData](/vext/ref/fb/viewfxdata) type.

