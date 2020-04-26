---
title: UICustomizationCompData
---

Inherits from [UIComponentData](/vext/ref/fb/uicomponentdata)

## Summary

### Constructors

|  |
| --- |
| **[UICustomizationCompData](#constructor-0)**() |
| **[UICustomizationCompData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[UICustomizationCompData](#constructor-2)**(other: [UIComponentData](/vext/ref/fb/uicomponentdata)) |
| **[UICustomizationCompData](#constructor-3)**(other: [Asset](/vext/ref/fb/asset)) |
| **[UICustomizationCompData](#constructor-4)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "soldierOffset" >}} | [Vec3](/vext/ref/shared/type/vec3) |
| {{< prop "soldierRotation" >}} | [Vec3](/vext/ref/shared/type/vec3) |
| {{< prop "vehicleRotation" >}} | [Vec3](/vext/ref/shared/type/vec3) |
| {{< prop "networkThrottleTimer" >}} | float |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "UICustomizationCompData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### UICustomizationCompData {#constructor-0}

> **UICustomizationCompData**()

Creates a new [UICustomizationCompData](/vext/ref/fb/uicustomizationcompdata) frostbite instance.

### UICustomizationCompData {#constructor-1}

> **UICustomizationCompData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [UICustomizationCompData](/vext/ref/fb/uicustomizationcompdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### UICustomizationCompData {#constructor-2}

> **UICustomizationCompData**(other: [UIComponentData](/vext/ref/fb/uicomponentdata))

Casts an instance of type [UIComponentData](/vext/ref/fb/uicomponentdata) to [UICustomizationCompData](/vext/ref/fb/uicustomizationcompdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [UIComponentData](/vext/ref/fb/uicomponentdata) | The instance to cast to [UICustomizationCompData](/vext/ref/fb/uicustomizationcompdata). |

### UICustomizationCompData {#constructor-3}

> **UICustomizationCompData**(other: [Asset](/vext/ref/fb/asset))

Casts an instance of type [Asset](/vext/ref/fb/asset) to [UICustomizationCompData](/vext/ref/fb/uicustomizationcompdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [Asset](/vext/ref/fb/asset) | The instance to cast to [UICustomizationCompData](/vext/ref/fb/uicustomizationcompdata). |

### UICustomizationCompData {#constructor-4}

> **UICustomizationCompData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [UICustomizationCompData](/vext/ref/fb/uicustomizationcompdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [UICustomizationCompData](/vext/ref/fb/uicustomizationcompdata). |

## Properties

### {{% prop-heading "soldierOffset" %}}

> **[Vec3](/vext/ref/shared/type/vec3)**

### {{% prop-heading "soldierRotation" %}}

> **[Vec3](/vext/ref/shared/type/vec3)**

### {{% prop-heading "vehicleRotation" %}}

> **[Vec3](/vext/ref/shared/type/vec3)**

### {{% prop-heading "networkThrottleTimer" %}}

> **float**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [UICustomizationCompData](/vext/ref/fb/uicustomizationcompdata) type.

