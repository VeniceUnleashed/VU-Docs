---
title: SoundTestParamTask
---

Inherits from 
[SoundTestTaskSpec](/vext/ref/fb/soundtesttaskspec)

## Summary
### Constructors
| |
| ----------- |
| **[SoundTestParamTask](#constructor-0)**() |
| **[SoundTestParamTask](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[SoundTestParamTask](#constructor-2)**(other: [SoundTestTaskSpec](/vext/ref/fb/soundtesttaskspec)) |
| **[SoundTestParamTask](#constructor-3)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "paramName" >}} | string |
| {{< prop "behavior" >}} | [SoundTestParamBehavior](/vext/ref/fb/soundtestparambehavior) |
| {{< prop "rangeMin" >}} | float |
| {{< prop "rangeMax" >}} | float |
| {{< prop "initialValue" >}} | float |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "SoundTestParamTask" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### SoundTestParamTask {#constructor-0}
> **SoundTestParamTask**()

Creates a new [SoundTestParamTask](/vext/ref/fb/soundtestparamtask) frostbite instance.

### SoundTestParamTask {#constructor-1}
> **SoundTestParamTask**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [SoundTestParamTask](/vext/ref/fb/soundtestparamtask) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### SoundTestParamTask {#constructor-2}
> **SoundTestParamTask**(other: [SoundTestTaskSpec](/vext/ref/fb/soundtesttaskspec))

Casts an instance of type [SoundTestTaskSpec](/vext/ref/fb/soundtesttaskspec) to [SoundTestParamTask](/vext/ref/fb/soundtestparamtask). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [SoundTestTaskSpec](/vext/ref/fb/soundtesttaskspec) | The instance to cast to [SoundTestParamTask](/vext/ref/fb/soundtestparamtask). |

### SoundTestParamTask {#constructor-3}
> **SoundTestParamTask**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SoundTestParamTask](/vext/ref/fb/soundtestparamtask). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [SoundTestParamTask](/vext/ref/fb/soundtestparamtask). |

## Properties
### {{% prop-heading "paramName" %}}
> **string**

### {{% prop-heading "behavior" %}}
> **[SoundTestParamBehavior](/vext/ref/fb/soundtestparambehavior)**

### {{% prop-heading "rangeMin" %}}
> **float**

### {{% prop-heading "rangeMax" %}}
> **float**

### {{% prop-heading "initialValue" %}}
> **float**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [SoundTestParamTask](/vext/ref/fb/soundtestparamtask) type.

