---
title: MeshLodGroup
---

Inherits from [Asset](/vext/ref/fb/asset)

## Summary

### Constructors

|  |
| --- |
| **[MeshLodGroup](#constructor-0)**() |
| **[MeshLodGroup](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[MeshLodGroup](#constructor-2)**(other: [Asset](/vext/ref/fb/asset)) |
| **[MeshLodGroup](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "lod1Distance" >}} | float |
| {{< prop "lod2Distance" >}} | float |
| {{< prop "lod3Distance" >}} | float |
| {{< prop "lod4Distance" >}} | float |
| {{< prop "lod5Distance" >}} | float |
| {{< prop "shadowDistance" >}} | float |
| {{< prop "cullScreenArea" >}} | float |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "MeshLodGroup" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### MeshLodGroup {#constructor-0}

> **MeshLodGroup**()

Creates a new [MeshLodGroup](/vext/ref/fb/meshlodgroup) frostbite instance.

### MeshLodGroup {#constructor-1}

> **MeshLodGroup**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [MeshLodGroup](/vext/ref/fb/meshlodgroup) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### MeshLodGroup {#constructor-2}

> **MeshLodGroup**(other: [Asset](/vext/ref/fb/asset))

Casts an instance of type [Asset](/vext/ref/fb/asset) to [MeshLodGroup](/vext/ref/fb/meshlodgroup). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [Asset](/vext/ref/fb/asset) | The instance to cast to [MeshLodGroup](/vext/ref/fb/meshlodgroup). |

### MeshLodGroup {#constructor-3}

> **MeshLodGroup**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [MeshLodGroup](/vext/ref/fb/meshlodgroup). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [MeshLodGroup](/vext/ref/fb/meshlodgroup). |

## Properties

### {{% prop-heading "lod1Distance" %}}

> **float**

### {{% prop-heading "lod2Distance" %}}

> **float**

### {{% prop-heading "lod3Distance" %}}

> **float**

### {{% prop-heading "lod4Distance" %}}

> **float**

### {{% prop-heading "lod5Distance" %}}

> **float**

### {{% prop-heading "shadowDistance" %}}

> **float**

### {{% prop-heading "cullScreenArea" %}}

> **float**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [MeshLodGroup](/vext/ref/fb/meshlodgroup) type.

