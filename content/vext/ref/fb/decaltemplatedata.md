---
title: DecalTemplateData
---

Inherits from 
[Asset](/vext/ref/fb/asset)

## Summary
### Constructors
| |
| ----------- |
| **[DecalTemplateData](#constructor-0)**() |
| **[DecalTemplateData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[DecalTemplateData](#constructor-2)**(other: [Asset](/vext/ref/fb/asset)) |
| **[DecalTemplateData](#constructor-3)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "size" >}} | float |
| {{< prop "randomSize" >}} | float |
| {{< prop "rotation" >}} | float |
| {{< prop "randomRotation" >}} | float |
| {{< prop "clipAngle" >}} | float |
| {{< prop "proximityRadiusFactor" >}} | float |
| {{< prop "normalOffset" >}} | float |
| {{< prop "shader" >}} | [SurfaceShaderBaseAsset](/vext/ref/fb/surfaceshaderbaseasset) \| nil |
| {{< prop "meshUVIndex" >}} | int |
| {{< prop "atlasTile" >}} | [DecalAtlasTile](/vext/ref/fb/decalatlastile) |
| {{< prop "sortingPriority" >}} | int |
| {{< prop "projected" >}} | bool |
| {{< prop "projectMultiple" >}} | bool |
| {{< prop "materialIndex" >}} | int |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "DecalTemplateData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### DecalTemplateData {#constructor-0}
> **DecalTemplateData**()

Creates a new [DecalTemplateData](/vext/ref/fb/decaltemplatedata) frostbite instance.

### DecalTemplateData {#constructor-1}
> **DecalTemplateData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [DecalTemplateData](/vext/ref/fb/decaltemplatedata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### DecalTemplateData {#constructor-2}
> **DecalTemplateData**(other: [Asset](/vext/ref/fb/asset))

Casts an instance of type [Asset](/vext/ref/fb/asset) to [DecalTemplateData](/vext/ref/fb/decaltemplatedata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [Asset](/vext/ref/fb/asset) | The instance to cast to [DecalTemplateData](/vext/ref/fb/decaltemplatedata). |

### DecalTemplateData {#constructor-3}
> **DecalTemplateData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [DecalTemplateData](/vext/ref/fb/decaltemplatedata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [DecalTemplateData](/vext/ref/fb/decaltemplatedata). |

## Properties
### {{% prop-heading "size" %}}
> **float**

### {{% prop-heading "randomSize" %}}
> **float**

### {{% prop-heading "rotation" %}}
> **float**

### {{% prop-heading "randomRotation" %}}
> **float**

### {{% prop-heading "clipAngle" %}}
> **float**

### {{% prop-heading "proximityRadiusFactor" %}}
> **float**

### {{% prop-heading "normalOffset" %}}
> **float**

### {{% prop-heading "shader" %}}
> **[SurfaceShaderBaseAsset](/vext/ref/fb/surfaceshaderbaseasset)** | **nil**

### {{% prop-heading "meshUVIndex" %}}
> **int**

### {{% prop-heading "atlasTile" %}}
> **[DecalAtlasTile](/vext/ref/fb/decalatlastile)**

### {{% prop-heading "sortingPriority" %}}
> **int**

### {{% prop-heading "projected" %}}
> **bool**

### {{% prop-heading "projectMultiple" %}}
> **bool**

### {{% prop-heading "materialIndex" %}}
> **int**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [DecalTemplateData](/vext/ref/fb/decaltemplatedata) type.

