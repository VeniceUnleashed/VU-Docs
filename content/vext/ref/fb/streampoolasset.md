---
title: StreamPoolAsset
---

Inherits from [Asset](/vext/ref/fb/asset)

## Summary

### Constructors

|  |
| --- |
| **[StreamPoolAsset](#constructor-0)**() |
| **[StreamPoolAsset](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[StreamPoolAsset](#constructor-2)**(other: [Asset](/vext/ref/fb/asset)) |
| **[StreamPoolAsset](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "streamPoolId" >}} | int |
| {{< prop "streamBufferSizeXenon" >}} | int |
| {{< prop "streamBufferSizePs3" >}} | int |
| {{< prop "streamBufferSizeWin32" >}} | int |
| {{< prop "streamCountXenon" >}} | int |
| {{< prop "streamCountPs3" >}} | int |
| {{< prop "streamCountWin32" >}} | int |
| {{< prop "streamReadBlockSizeXenon" >}} | int |
| {{< prop "streamReadBlockSizePs3" >}} | int |
| {{< prop "streamReadBlockSizeWin32" >}} | int |
| {{< prop "streamStarveMode" >}} | [StreamStarveMode](/vext/ref/fb/streamstarvemode) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "StreamPoolAsset" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### StreamPoolAsset {#constructor-0}

> **StreamPoolAsset**()

Creates a new [StreamPoolAsset](/vext/ref/fb/streampoolasset) frostbite instance.

### StreamPoolAsset {#constructor-1}

> **StreamPoolAsset**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [StreamPoolAsset](/vext/ref/fb/streampoolasset) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### StreamPoolAsset {#constructor-2}

> **StreamPoolAsset**(other: [Asset](/vext/ref/fb/asset))

Casts an instance of type [Asset](/vext/ref/fb/asset) to [StreamPoolAsset](/vext/ref/fb/streampoolasset). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [Asset](/vext/ref/fb/asset) | The instance to cast to [StreamPoolAsset](/vext/ref/fb/streampoolasset). |

### StreamPoolAsset {#constructor-3}

> **StreamPoolAsset**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [StreamPoolAsset](/vext/ref/fb/streampoolasset). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [StreamPoolAsset](/vext/ref/fb/streampoolasset). |

## Properties

### {{% prop-heading "streamPoolId" %}}

> **int**

### {{% prop-heading "streamBufferSizeXenon" %}}

> **int**

### {{% prop-heading "streamBufferSizePs3" %}}

> **int**

### {{% prop-heading "streamBufferSizeWin32" %}}

> **int**

### {{% prop-heading "streamCountXenon" %}}

> **int**

### {{% prop-heading "streamCountPs3" %}}

> **int**

### {{% prop-heading "streamCountWin32" %}}

> **int**

### {{% prop-heading "streamReadBlockSizeXenon" %}}

> **int**

### {{% prop-heading "streamReadBlockSizePs3" %}}

> **int**

### {{% prop-heading "streamReadBlockSizeWin32" %}}

> **int**

### {{% prop-heading "streamStarveMode" %}}

> **[StreamStarveMode](/vext/ref/fb/streamstarvemode)**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [StreamPoolAsset](/vext/ref/fb/streampoolasset) type.

