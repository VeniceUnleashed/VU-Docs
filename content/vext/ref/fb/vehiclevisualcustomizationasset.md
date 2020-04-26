---
title: VehicleVisualCustomizationAsset
---

Inherits from [Asset](/vext/ref/fb/asset)

## Summary

### Constructors

|  |
| --- |
| **[VehicleVisualCustomizationAsset](#constructor-0)**() |
| **[VehicleVisualCustomizationAsset](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[VehicleVisualCustomizationAsset](#constructor-2)**(other: [Asset](/vext/ref/fb/asset)) |
| **[VehicleVisualCustomizationAsset](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "textureUnlockPartCollections" >}} | [ShaderTextureUnlockPartCollection](/vext/ref/fb/shadertextureunlockpartcollection)[] |
| {{< prop "textUnlockParts" >}} | [TextUnlockPartData](/vext/ref/fb/textunlockpartdata)[] |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "VehicleVisualCustomizationAsset" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### VehicleVisualCustomizationAsset {#constructor-0}

> **VehicleVisualCustomizationAsset**()

Creates a new [VehicleVisualCustomizationAsset](/vext/ref/fb/vehiclevisualcustomizationasset) frostbite instance.

### VehicleVisualCustomizationAsset {#constructor-1}

> **VehicleVisualCustomizationAsset**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [VehicleVisualCustomizationAsset](/vext/ref/fb/vehiclevisualcustomizationasset) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### VehicleVisualCustomizationAsset {#constructor-2}

> **VehicleVisualCustomizationAsset**(other: [Asset](/vext/ref/fb/asset))

Casts an instance of type [Asset](/vext/ref/fb/asset) to [VehicleVisualCustomizationAsset](/vext/ref/fb/vehiclevisualcustomizationasset). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [Asset](/vext/ref/fb/asset) | The instance to cast to [VehicleVisualCustomizationAsset](/vext/ref/fb/vehiclevisualcustomizationasset). |

### VehicleVisualCustomizationAsset {#constructor-3}

> **VehicleVisualCustomizationAsset**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [VehicleVisualCustomizationAsset](/vext/ref/fb/vehiclevisualcustomizationasset). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [VehicleVisualCustomizationAsset](/vext/ref/fb/vehiclevisualcustomizationasset). |

## Properties

### {{% prop-heading "textureUnlockPartCollections" %}}

> **[ShaderTextureUnlockPartCollection](/vext/ref/fb/shadertextureunlockpartcollection)**[]

### {{% prop-heading "textUnlockParts" %}}

> **[TextUnlockPartData](/vext/ref/fb/textunlockpartdata)**[]

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [VehicleVisualCustomizationAsset](/vext/ref/fb/vehiclevisualcustomizationasset) type.

