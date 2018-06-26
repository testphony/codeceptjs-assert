# codeceptjs-assert

codeceptjs-assert is [CodeceptJS](https://codecept.io/) helper which wraps [assert](https://nodejs.org/docs/latest-v8.x/api/assert.html) library to complete assertion tests with CodeceptJS logging.
This wrapper allow us to print asserts as steps in output. Also we can expand this lib with different methods and other assertion libraries.

NPM package: https://www.npmjs.com/package/codeceptjs-assert

### Configuration

This helper should be added in codecept.json/codecept.conf.js

Example:

```json
{
   "helpers": {
     "AssertWrapper" : {
       "require": "codeceptjs-assert"
     }
   }
}
```

## assert

Tests shallow, coercive equality between the actual and expected parameters using the Abstract Equality Comparison ( == ).

https://nodejs.org/docs/latest-v8.x/api/assert.html#assert_assert_equal_actual_expected_message

```js
I.assert('true', true);
```

**Parameters**

-   `actual` - actual result
-   `expected` - expected result
-   `message` - (optional) error message to display

## assertDeepEqual

Tests for deep equality between the actual and expected parameters. Primitive values are compared with the Abstract Equality Comparison ( == ).

https://nodejs.org/docs/latest-v8.x/api/assert.html#assert_assert_deepequal_actual_expected_message

```js
I.assertDeepEqual({ a: { b: 1 } }, { a: { b: 2 } });
```

**Parameters**

-   `actual` - actual result
-   `expected` - expected result
-   `message` - (optional) error message to display

## assertDeepStrictEqual

Generally identical to assert.deepEqual() with a few exceptions:
* Primitive values are compared using the Strict Equality Comparison ( === ). Set values and Map keys are compared using the SameValueZero comparison. (Which means they are free of the caveats).
* [[Prototype]] of objects are compared using the Strict Equality Comparison too.
* Type tags of objects should be the same.
* Object wrappers are compared both as objects and unwrapped values.

https://nodejs.org/docs/latest-v8.x/api/assert.html#assert_assert_deepstrictequal_actual_expected_message

```js
I.assertDeepStrictEqual({ a: 1 }, { a: '1' });
```

**Parameters**

-   `actual` - actual result
-   `expected` - expected result
-   `message` - (optional) error message to display

## assertEqual

Alias to assert method

https://nodejs.org/docs/latest-v8.x/api/assert.html#assert_assert_equal_actual_expected_message

```js
I.assertEqual('true', true);
```

**Parameters**

-   `actual` - actual result
-   `expected` - expected result
-   `message` - (optional) error message to display

## assertFail

Throws an AssertionError. The error message is set as the values of actual and expected separated by the provided operator

https://nodejs.org/docs/latest-v8.x/api/assert.html#assert_assert_fail_actual_expected_message_operator_stackstartfunction

```js
I.assertFail('true', true);
```

**Parameters**

-   `actual` - actual result
-   `expected` - expected result
-   `message` - (optional) error message to display
-   `operator` - (optional) default: `!=`

## assertOk

Tests if value is truthy.

https://nodejs.org/docs/latest-v8.x/api/assert.html#assert_assert_ok_value_message

```js
I.assertOk(1 == '1', 'not equal');
```

**Parameters**

-   `value` - any value
-   `message` - (optional) error message to display

## assertNotEqual

Check that actual and expected are not equal

https://nodejs.org/docs/latest-v8.x/api/assert.html#assert_assert_notequal_actual_expected_message

```js
I.assertNotEqual('true', 'foo');
```

**Parameters**

-   `actual` - actual result
-   `expected` - expected result
-   `message` - (optional) error message to display

## assertNotDeepStrictEqual

Tests for any deep inequality.

https://nodejs.org/docs/latest-v8.x/api/assert.html#assert_assert_notdeepequal_actual_expected_message

```js
I.assertNotDeepStrictEqual({ a: { b: 1 } }, { a: { b: 2 } });
```

**Parameters**

-   `actual` - actual result
-   `expected` - expected result
-   `message` - (optional) error message to display

## assertNotDeepEqual

Tests for any deep inequality.

https://nodejs.org/docs/latest-v8.x/api/assert.html#assert_assert_notdeepequal_actual_expected_message

```js
I.assertNotDeepEqual({ a: { b: 1 } }, { a: { b: 2 } });
```

**Parameters**

-   `actual` - actual result
-   `expected` - expected result
-   `message` - (optional) error message to display

## assertStatusCode

Compare expected and actual status code.

```js
I.assertStatusCode(200, 400);
```

**Parameters**

-   `actual` - actual result
-   `expected` - expected result

## assertBodyIsNotEmpty

Expect that body is not empty.

```js
I.assertBodyIsNotEmpty({foo: 'bar'});
```

**Parameters**

-   `actual` - actual result
-   `message` - (optional) error message to display

## assertKeyInObjectExists

Check that list of keys are in object.

```js
I.assertKeyInObjectExists('foo.bar.three', {foo: 'bar', bar: 'foo'});
```

**Parameters**

-   `keys` - list of keys split by `.
-   `obj` - tested object

## assertKeyInObjectNotExists

Check that list of keys are not in object

```js
I.assertKeyInObjectNotExists('foo.bar.three', {foo: 'bar', bar: 'foo'});
```

**Parameters**

-   `keys` - list of keys split by `.
-   `obj` - tested object

## assertEach

Check that each element in array match predicate

```js
I.assertEach(['foo', 3], (el) => typeof el == 'string');
```

**Parameters**

-   `items` - tested array
-   `predicate` - predicate function. should return true for each element
-   `message` - error message to display

## assertExists

Check that array has at least one element that match predicate

```js
I.assertExists(['foo', 3], (el) => typeof el == 'string');
```

**Parameters**

-   `items` - tested array
-   `predicate` - predicate function. should return true for each element
-   `message` - error message to display

## assertStringIncludes

Check that string contains substring

```js
I.assertStringIncludes('mystring'. 'str');
```

**Parameters**

-   `actual` - tested string
-   `substring` - expected substring


