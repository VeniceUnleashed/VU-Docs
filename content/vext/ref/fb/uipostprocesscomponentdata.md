---
title: UIPostProcessComponentData
---

Inherits from [UIComponentData](/vext/ref/fb/uicomponentdata)

## Summary

### Constructors

|  |
| --- |
| **[UIPostProcessComponentData](#constructor-0)**() |
| **[UIPostProcessComponentData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[UIPostProcessComponentData](#constructor-2)**(other: [UIComponentData](/vext/ref/fb/uicomponentdata)) |
| **[UIPostProcessComponentData](#constructor-3)**(other: [Asset](/vext/ref/fb/asset)) |
| **[UIPostProcessComponentData](#constructor-4)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "highlightThreshold" >}} | float |
| {{< prop "xPower" >}} | float |
| {{< prop "yPower" >}} | float |
| {{< prop "distort" >}} | float |
| {{< prop "timeScale" >}} | float |
| {{< prop "noiseTexture" >}} | [TextureAsset](/vext/ref/fb/textureasset) \| nil |
| {{< prop "highlight" >}} | float |
| {{< prop "rShift" >}} | float |
| {{< prop "gShift" >}} | float |
| {{< prop "bShift" >}} | float |
| {{< prop "tweakMode" >}} | bool |
| {{< prop "enabled" >}} | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "UIPostProcessComponentData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### UIPostProcessComponentData {#constructor-0}

> **UIPostProcessComponentData**()

Creates a new [UIPostProcessComponentData](/vext/ref/fb/uipostprocesscomponentdata) frostbite instance.

### UIPostProcessComponentData {#constructor-1}

> **UIPostProcessComponentData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [UIPostProcessComponentData](/vext/ref/fb/uipostprocesscomponentdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### UIPostProcessComponentData {#constructor-2}

> **UIPostProcessComponentData**(other: [UIComponentData](/vext/ref/fb/uicomponentdata))

Casts an instance of type [UIComponentData](/vext/ref/fb/uicomponentdata) to [UIPostProcessComponentData](/vext/ref/fb/uipostprocesscomponentdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [UIComponentData](/vext/ref/fb/uicomponentdata) | The instance to cast to [UIPostProcessComponentData](/vext/ref/fb/uipostprocesscomponentdata). |

### UIPostProcessComponentData {#constructor-3}

> **UIPostProcessComponentData**(other: [Asset](/vext/ref/fb/asset))

Casts an instance of type [Asset](/vext/ref/fb/asset) to [UIPostProcessComponentData](/vext/ref/fb/uipostprocesscomponentdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [Asset](/vext/ref/fb/asset) | The instance to cast to [UIPostProcessComponentData](/vext/ref/fb/uipostprocesscomponentdata). |

### UIPostProcessComponentData {#constructor-4}

> **UIPostProcessComponentData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [UIPostProcessComponentData](/vext/ref/fb/uipostprocesscomponentdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [UIPostProcessComponentData](/vext/ref/fb/uipostprocesscomponentdata). |

## Properties

### {{% prop-heading "highlightThreshold" %}}

> **float**

### {{% prop-heading "xPower" %}}

> **float**

### {{% prop-heading "yPower" %}}

> **float**

### {{% prop-heading "distort" %}}

> **float**

### {{% prop-heading "timeScale" %}}

> **float**

### {{% prop-heading "noiseTexture" %}}

> **[TextureAsset](/vext/ref/fb/textureasset)** \| **nil**

### {{% prop-heading "highlight" %}}

> **float**

### {{% prop-heading "rShift" %}}

> **float**

### {{% prop-heading "gShift" %}}

> **float**

### {{% prop-heading "bShift" %}}

> **float**

### {{% prop-heading "tweakMode" %}}

> **bool**

### {{% prop-heading "enabled" %}}

> **bool**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [UIPostProcessComponentData](/vext/ref/fb/uipostprocesscomponentdata) type.

